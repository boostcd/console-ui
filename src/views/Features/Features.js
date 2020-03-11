import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import featuresType from '../../types/features';
import { startPollingFeatures, stopPollingFeatures } from './state/actions';

const mapStateToProps = (state) => ({
  data: state.features.data,
  loading: state.features.loading,
  error: state.features.error,
  polling: state.features.polling,
});

const mapDispatchToProps = (dispatch) => ({
  startPolling: () => dispatch(startPollingFeatures()),
  stopPolling: () => dispatch(stopPollingFeatures()),
});

@connect(mapStateToProps, mapDispatchToProps)
class Features extends React.PureComponent {
  componentDidMount() {
    this.props.startPolling();
  }

  componentWillUnmount() {
    this.props.stopPolling();
  }

  render() {
    return (
      <>
        <Helmet title='Features' />
        <div>Features: To be implemented</div>
      </>
    );
  }
}

Features.propTypes = {
  data: featuresType,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  polling: PropTypes.shape({
    count: PropTypes.number,
    lastUpdated: PropTypes.instanceOf(Date),
  }),
  search: PropTypes.string,
  startPolling: PropTypes.func,
  stopPolling: PropTypes.func,
};

export default Features;
