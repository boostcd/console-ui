import debounce from 'debounce';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Box, Flex } from 'reflexbox';

import Controls from '../../components/Controls/Controls';
import DataFallback from '../../components/DataFallback/DataFallback';
import Input from '../../components/Input/Input';
import LastUpdated from '../../components/LastUpdated/LastUpdated';
import Loader from '../../components/Loader/Loader';
import PageHeading from '../../components/PageHeading/PageHeading';
import { DEBOUNCE_DELAY } from '../../constants';
import featuresType from '../../types/features';
import t from '../../utils/translate';
import FeaturesItems from './FeaturesItems';
import { searchFeatures, startPollingFeatures, stopPollingFeatures } from './state/actions';
import { getFeaturesSelector } from './state/selectors';

const mapStateToProps = (state) => ({
  data: getFeaturesSelector(state),
  loading: state.features.loading,
  polling: state.features.polling,
  searchQuery: state.features.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
  startPolling: () => dispatch(startPollingFeatures()),
  stopPolling: () => dispatch(stopPollingFeatures()),
  searchFeatures: (searchQuery) => dispatch(searchFeatures(searchQuery)),
});

@connect(mapStateToProps, mapDispatchToProps)
class Features extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: props.searchQuery,
    };

    this.debounceSearch = debounce(this.debounceSearch, DEBOUNCE_DELAY);
  }

  componentDidMount() {
    this.props.startPolling();
  }

  componentWillUnmount() {
    this.props.stopPolling();
  }

  // Temporary restarting the polling in order to update the loading state of the actions
  handleStateChange = async (actionTitle, actionFn, ...params) => {
    const action = actionTitle.toLowerCase();
    const toastId = toast.info(t('common.action.pending', { action }), {
      autoClose: false,
    });

    try {
      await actionFn(...params);
      toast.success(t('common.action.success', { action }), {
        autoClose: 2500,
      });
    } finally {
      toast.dismiss(toastId);
    }

    this.props.stopPolling();
    this.props.startPolling();
  };

  handleSearchChange = (event) => {
    this.setState(
      {
        searchQuery: event.target.value,
      },
      this.debounceSearch
    );
  };

  debounceSearch = () => {
    this.props.searchFeatures(this.state.searchQuery);
  };

  render() {
    const { searchQuery } = this.state;
    const { data, loading, polling } = this.props;
    const { count, lastUpdated } = polling;

    if (loading && !count) return <Loader />;
    if (data && !data.length) return <DataFallback title={t('features.dataFallback')} />;

    const pageTitle = TASK_MANAGEMENT_TITLE ? TASK_MANAGEMENT_TITLE : t('features.pageTitle');

    return (
      <>
        <Helmet title={pageTitle} />
        <PageHeading title={pageTitle}>
          <Input
            value={searchQuery}
            onChange={this.handleSearchChange}
            placeholder={t('features.searchPlaceholder')}
          />
        </PageHeading>
        <Controls
          data={data}
          itemAccessor='features'
          onStateChange={this.handleStateChange}
          buttonBuildLabel={t('common.build')}
          buttonPromoteLabel={t('common.promote')}
        />
        <Flex mt={3} flexDirection='column-reverse'>
          <Box px={2}>{lastUpdated && <LastUpdated date={lastUpdated} loading={loading} />}</Box>
        </Flex>
        <FeaturesItems data={data} />
      </>
    );
  }
}

Features.propTypes = {
  data: featuresType,
  loading: PropTypes.bool,
  polling: PropTypes.shape({
    count: PropTypes.number,
    lastUpdated: PropTypes.instanceOf(Date),
  }),
  searchQuery: PropTypes.string,
  startPolling: PropTypes.func,
  stopPolling: PropTypes.func,
  searchFeatures: PropTypes.func,
};

export default Features;
