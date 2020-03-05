import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';
import { fetchMicroservices } from './state/actions';

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
    const { loading } = this.props;

    if (loading) return <Loader />;

    return (
      <>
        <Helmet title='Microservices' />
        <div>Microservices: To be implemented</div>
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
