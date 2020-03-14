import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';
import microserviceType from '../../types/microservice';
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
    const { match, data, loading, error } = this.props;
    const { params } = match;
    const { environmentName, appName } = params;

    if (error) return null;
    if (loading) return <Loader />;

    // TODO: Implement proper UI for display the data
    return (
      <>
        <Helmet title={`${appName}@${environmentName}`} />
        <div>
          <div>Name: {data.name}</div>
          <div>Display name: {data.displayName}</div>
          <div>Version: {data.version}</div>
          <div>Deployed date: {data.deployed ? data.deployedDate : 'Not deployed'}</div>
          <div>Tested: {data.tested ? 'Yes' : 'No'}</div>
          <div>Actions: ...</div>
        </div>
      </>
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
