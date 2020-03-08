import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';
import * as Styles from './Microservices.styled';
import MicroservicesApplications from './MicroservicesApplications';
import MicroservicesControls from './MicroservicesControls';
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
    const { data, loading } = this.props;

    if (loading) return <Loader />;

    return (
      <Styles.Wrapper>
        <Helmet title='Microservices' />
        <MicroservicesControls data={data} />
        <MicroservicesApplications data={data} />
      </Styles.Wrapper>
    );
  }
}

Microservices.propTypes = {
  data: PropTypes.any,
  loading: PropTypes.bool,
  fetchMicroservices: PropTypes.func,
};

export default Microservices;
