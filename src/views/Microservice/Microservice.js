import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import PageHeading from '../../components/PageHeading';
import microserviceType from '../../types/microservice';
import t from '../../utils/translate';
import * as Styles from './Microservice.styled';
import { fetchMicroservice } from './state/actions';

const mapStateToProps = (state) => ({
  data: state.microservice.data,
  loading: state.microservice.loading,
  error: state.microservice.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMicroservice: (...params) => dispatch(fetchMicroservice(...params)),
});

@connect(mapStateToProps, mapDispatchToProps)
class Microservice extends React.PureComponent {
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { environmentName, appName } = params;

    this.props.fetchMicroservice(environmentName, appName);
  }

  render() {
    const { match, data, error, loading } = this.props;
    const { params } = match;
    const { environmentName, appName } = params;

    if (error) return null;
    if (loading || !data) return <Loader />;

    const title = t('microservice.pageTitle', { service: `${appName}@${environmentName}` });

    return (
      <Styles.Wrapper>
        <Helmet title={title} />
        <PageHeading title={title}>
          <Link to='/microservices'>
            <Button type='primary'>{t('microservice.actions.backToList')}</Button>
          </Link>
        </PageHeading>
        <Card>
          <Styles.Detail>
            <Styles.DetailTitle>{t('common.name')}:</Styles.DetailTitle>
            <Styles.DetailValue>{data.name}</Styles.DetailValue>
          </Styles.Detail>
          <Styles.Detail>
            <Styles.DetailTitle>{t('common.displayName')}</Styles.DetailTitle>
            <Styles.DetailValue>{data.displayName}</Styles.DetailValue>
          </Styles.Detail>
          <Styles.Detail>
            <Styles.DetailTitle>{t('common.environment')}:</Styles.DetailTitle>
            <Styles.DetailValue>{environmentName}</Styles.DetailValue>
          </Styles.Detail>
          <Styles.Detail>
            <Styles.DetailTitle>{t('common.version')}:</Styles.DetailTitle>
            <Styles.DetailValue>{data.version}</Styles.DetailValue>
          </Styles.Detail>
          <Styles.Detail>
            <Styles.DetailTitle>{t('common.deployedDate')}:</Styles.DetailTitle>
            <Styles.DetailValue>
              {data.deployedDate ? new Date(data.deployedDate).toLocaleString() : 'n/a'}
            </Styles.DetailValue>
          </Styles.Detail>
        </Card>
      </Styles.Wrapper>
    );
  }
}

Microservice.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      environmentName: PropTypes.string,
      appName: PropTypes.string,
    }),
  }),
  data: PropTypes.shape(microserviceType),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  fetchMicroservice: PropTypes.func,
};

export default Microservice;
