import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import BuildApi from '../../apis/BuildApi';
import Loader from '../../components/Loader';
import MicroservicesApplications from './MicroservicesApplications';
import MicroservicesControls from './MicroservicesControls';
import { fetchMicroservices } from './state/actions';

// TODO:
const apis = {
  buildApi: new BuildApi('http://console-build-api-blockchain-demo-monitoring.52.56.85.176.xip.io'),
};

const mapStateToProps = (state) => ({
  data: state.microservices.data,
  loading: state.microservices.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMicroservices: () => dispatch(fetchMicroservices()),
});

@connect(mapStateToProps, mapDispatchToProps)
class Microservices extends React.PureComponent {
  componentDidMount() {
    this.props.fetchMicroservices();
  }

  render() {
    const { data, loading } = this.props;

    if (loading) return <Loader />;

    return (
      <>
        <Helmet title='Microservices' />
        <MicroservicesControls data={data} />
        <MicroservicesApplications data={data} />
      </>
    );
  }
}

Microservices.propTypes = {
  data: PropTypes.any,
  loading: PropTypes.bool,
  fetchMicroservices: PropTypes.func,
};

export default Microservices;
