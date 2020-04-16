import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import gatewayApi from '../../apis/GatewayApi';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';
import PageHeading from '../../components/PageHeading/PageHeading';
import { fetchUsers as fetchUsersAction } from '../../store/users/actions';
import environmentType from '../../types/environment';
import usersType from '../../types/users';
import ToastService from '../../utils/ToastService';
import t from '../../utils/translate';
import EnvironmentForm from './EnvironmentForm';
import { fetchEnvironment as fetchEnvironmentAction } from './state/actions';

const mapStateToProps = (state) => ({
  users: state.users.data,
  usersLoading: state.users.loading,
  environment: state.environment.data,
  environmentLoading: state.environment.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsersAction()),
  fetchEnvironment: (namespace) => dispatch(fetchEnvironmentAction(namespace)),
});

@connect(mapStateToProps, mapDispatchToProps)
class Environment extends React.PureComponent {
  constructor(props) {
    super(props);

    const { match } = props;
    const { params } = match;
    const { namespace } = params;

    this.isEditing = namespace !== undefined;
    this.namespace = params.namespace;
  }

  componentDidMount() {
    const { fetchUsers, fetchEnvironment } = this.props;

    fetchUsers();

    if (this.isEditing) {
      fetchEnvironment(this.namespace);
    }
  }

  handleSubmit = async (data) => {
    const { history } = this.props;

    if (this.isEditing) {
      await gatewayApi.editEnvironment(this.namespace, {
        title: data.title,
      });
      ToastService.success(t('environment.edit.successMessage'));
    } else {
      await gatewayApi.createEnvironment({
        title: data.title,
        owner: data.owner,
        test: data.test,
      });
      ToastService.success(t('environment.add.successMessage'));
    }

    // Redirect back to the list page
    history.push('/environments');
  };

  render() {
    const { users, usersLoading, environment, environmentLoading } = this.props;

    if (usersLoading || (environmentLoading && this.isEditing)) return <Loader />;

    const pageTitle = this.isEditing
      ? t('environment.edit.pageTitle', { namespace: this.namespace })
      : t('environment.add.pageTitle');

    return (
      <>
        <Helmet title={pageTitle} />
        <PageHeading title={pageTitle}>
          <Link to='/environments'>
            <Button variant='primary'>{t('environment.actions.backToList')}</Button>
          </Link>
        </PageHeading>
        <Card>
          <EnvironmentForm
            environment={this.isEditing ? environment : undefined}
            users={users}
            isEditing={this.isEditing}
            onSubmit={this.handleSubmit}
          />
        </Card>
      </>
    );
  }
}

Environment.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      namespace: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  users: usersType,
  usersLoading: PropTypes.bool,
  environment: PropTypes.shape(environmentType),
  environmentLoading: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  fetchUsers: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  fetchEnvironment: PropTypes.func,
};

Environment.defaultProps = {
  users: [],
  usersLoading: true,
  environment: {},
  environmentLoading: true,
};

export default Environment;
