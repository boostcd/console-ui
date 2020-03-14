import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import Controls from '../../components/Controls';
import DataFallback from '../../components/DataFallback';
import Loader from '../../components/Loader';
import featuresType from '../../types/features';
import t from '../../utils/translate';
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
    const { data, loading, error, polling } = this.props;
    const { count } = polling;

    if (error) return null;
    if (loading && !count) return <Loader />;
    if (data && !data.length) return <DataFallback title={t('features.dataFallback')} />;

    return (
      <>
        <Helmet title={t('features.pageTitle')} />
        <Controls data={data} />
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
