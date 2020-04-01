import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import gatewayApi from '../../apis/GatewayApi';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';
import PageHeading from '../../components/PageHeading/PageHeading';
import { fetchUsers } from '../../store/users/actions';
import projectType from '../../types/project';
import usersType from '../../types/users';
import t from '../../utils/translate';
import ProjectForm from './ProjectForm';
import { fetchProject } from './state/actions';

const mapStateToProps = (state) => ({
  users: state.users.data,
  usersLoading: state.users.loading,
  project: state.project.data,
  projectLoading: state.project.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchProject: (namespace) => dispatch(fetchProject(namespace)),
});

@connect(mapStateToProps, mapDispatchToProps)
class Project extends React.PureComponent {
  constructor(props) {
    super(props);

    const { match } = props;
    const { params } = match;
    const { namespace } = params;

    this.isEditing = namespace !== undefined;
    this.namespace = params.namespace;
  }

  componentDidMount() {
    this.props.fetchUsers();

    if (this.isEditing) {
      this.props.fetchProject(this.namespace);
    }
  }

  handleSubmit = async (data) => {
    const { history } = this.props;

    if (this.isEditing) {
      await gatewayApi.editProject(this.namespace, data);
      toast.success(t('project.edit.successMessage'));
    } else {
      await gatewayApi.createProject(data);
      toast.success(t('project.add.successMessage'));
    }

    // Redirect back to the list page
    history.push('/projects');
  };

  render() {
    const { users, usersLoading, project, projectLoading } = this.props;

    if (usersLoading || (projectLoading && this.isEditing)) return <Loader />;

    const pageTitle = this.isEditing
      ? t('project.edit.pageTitle', { namespace: this.namespace })
      : t('project.add.pageTitle');

    return (
      <>
        <Helmet title={pageTitle} />
        <PageHeading title={pageTitle}>
          <Link to='/projects'>
            <Button variant='primary'>{t('project.actions.backToList')}</Button>
          </Link>
        </PageHeading>
        <Card>
          <ProjectForm
            project={project}
            users={users}
            isEditing={this.isEditing}
            onSubmit={this.handleSubmit}
          />
        </Card>
      </>
    );
  }
}

Project.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      namespace: PropTypes.string,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  users: usersType,
  usersLoading: PropTypes.bool,
  project: PropTypes.shape(projectType),
  projectLoading: PropTypes.bool,
  fetchUsers: PropTypes.func,
  fetchProject: PropTypes.func,
};

export default Project;
