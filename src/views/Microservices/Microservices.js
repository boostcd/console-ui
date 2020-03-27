import debounce from 'debounce';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
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
import microservicesType from '../../types/microservices';
import t from '../../utils/translate';
import MicroservicesApplications from './MicroservicesApplications';
import {
  searchMicroservices,
  startPollingMicroservices,
  stopPollingMicroservices,
} from './state/actions';
import { getMicroservicesSelector } from './state/selectors';

const mapStateToProps = (state) => ({
  data: getMicroservicesSelector(state),
  loading: state.microservices.loading,
  polling: state.microservices.polling,
  searchQuery: state.microservices.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
  startPolling: () => dispatch(startPollingMicroservices()),
  stopPolling: () => dispatch(stopPollingMicroservices()),
  searchMicroservices: (searchQuery) => dispatch(searchMicroservices(searchQuery)),
});

@connect(mapStateToProps, mapDispatchToProps)
class Microservices extends React.PureComponent {
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
    this.props.searchMicroservices(this.state.searchQuery);
  };

  render() {
    const { searchQuery } = this.state;
    const { data, loading, polling } = this.props;
    const { count, lastUpdated } = polling;

    if (loading && !count) return <Loader />;
    if (data && !data.length) return <DataFallback title={t('microservices.dataFallback')} />;

    return (
      <>
        <Helmet title={t('microservices.pageTitle')} />
        <PageHeading title={t('microservices.pageTitle')}>
          <Input
            value={searchQuery}
            onChange={this.handleSearchChange}
            placeholder={t('microservices.searchPlaceholder')}
          />
        </PageHeading>
        <Controls data={data} itemAccessor='apps' onStateChange={this.handleStateChange} />
        <Flex mt={3} flexDirection='column-reverse'>
          <Box px={2}>{lastUpdated && <LastUpdated date={lastUpdated} loading={loading} />}</Box>
        </Flex>
        <MicroservicesApplications data={data} onStateChange={this.handleStateChange} />
      </>
    );
  }
}

Microservices.propTypes = {
  data: microservicesType,
  loading: PropTypes.bool,
  polling: PropTypes.shape({
    count: PropTypes.number,
    lastUpdated: PropTypes.instanceOf(Date),
  }),
  searchQuery: PropTypes.string,
  startPolling: PropTypes.func,
  stopPolling: PropTypes.func,
  searchMicroservices: PropTypes.func,
};

export default Microservices;
