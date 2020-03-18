import { Box, Flex } from '@rebass/grid';
import debounce from 'debounce';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import Controls from '../../components/Controls';
import DataFallback from '../../components/DataFallback';
import Input from '../../components/Input';
import LastUpdated from '../../components/LastUpdated';
import Loader from '../../components/Loader';
import PageHeading from '../../components/PageHeading';
import { DEBOUNCE_DELAY } from '../../constants';
import featuresType from '../../types/features';
import t from '../../utils/translate';
import FeaturesItems from './FeaturesItems';
import { searchFeatures, startPollingFeatures, stopPollingFeatures } from './state/actions';
import { getFeaturesSearchSelector, getFeaturesSelector } from './state/selectors';

const mapStateToProps = (state) => ({
  data: getFeaturesSelector(state),
  loading: state.features.loading,
  polling: state.features.polling,
  search: getFeaturesSearchSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  startPolling: () => dispatch(startPollingFeatures()),
  stopPolling: () => dispatch(stopPollingFeatures()),
  searchFeatures: (search) => dispatch(searchFeatures(search)),
});

@connect(mapStateToProps, mapDispatchToProps)
class Features extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      search: props.search,
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
  handleStateChange = async (apiFn, ...params) => {
    await apiFn(...params);

    this.props.stopPolling();
    this.props.startPolling();
  };

  handleSearchChange = (event) => {
    this.setState(
      {
        search: event.target.value,
      },
      this.debounceSearch
    );
  };

  debounceSearch = () => {
    this.props.searchFeatures(this.state.search);
  };

  render() {
    const { search } = this.state;
    const { data, loading, polling } = this.props;
    const { count, lastUpdated } = polling;

    if (loading && !count) return <Loader />;
    if (data && !data.length) return <DataFallback title={t('features.dataFallback')} />;

    const title = TASK_MANAGEMENT_TITLE ? TASK_MANAGEMENT_TITLE : t('features.pageTitle');

    return (
      <>
        <Helmet title={title} />
        <PageHeading title={title}>
          <Input
            value={search}
            onChange={this.handleSearchChange}
            placeholder={t('features.searchPlaceholder')}
          />
        </PageHeading>
        <Controls data={data} itemAccessor='features' onStateChange={this.handleStateChange} />
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
  search: PropTypes.string,
  startPolling: PropTypes.func,
  stopPolling: PropTypes.func,
  searchFeatures: PropTypes.func,
};

export default Features;
