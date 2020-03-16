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
import { DEBOUNCE_DELAY } from '../../constants';
import microservicesType from '../../types/microservices';
import t from '../../utils/translate';
import * as Styles from './Microservices.styled';
import MicroservicesApplications from './MicroservicesApplications';
import {
  searchMicroservices,
  startPollingMicroservices,
  stopPollingMicroservices,
} from './state/actions';
import { getMicroservices, getMicroservicesSearch } from './state/selectors';

const mapStateToProps = (state) => ({
  data: getMicroservices(state),
  loading: state.microservices.loading,
  error: state.microservices.error,
  polling: state.microservices.polling,
  search: getMicroservicesSearch(state),
});

const mapDispatchToProps = (dispatch) => ({
  startPolling: () => dispatch(startPollingMicroservices()),
  stopPolling: () => dispatch(stopPollingMicroservices()),
  searchMicroservices: (search) => dispatch(searchMicroservices(search)),
});

@connect(mapStateToProps, mapDispatchToProps)
class Microservices extends React.PureComponent {
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

  handleSearchChange = (event) => {
    this.setState(
      {
        search: event.target.value,
      },
      this.debounceSearch
    );
  };

  debounceSearch = () => {
    this.props.searchMicroservices(this.state.search);
  };

  render() {
    const { search } = this.state;
    const { data, loading, error, polling } = this.props;
    const { count, lastUpdated } = polling;

    if (error) return null;
    if (loading && !count) return <Loader />;
    if (data && !data.length) return <DataFallback title={t('microservices.dataFallback')} />;

    return (
      <Styles.Wrapper>
        <Helmet title={t('microservices.pageTitle')} />
        <Controls data={data} itemAccessor='apps' />
        <Styles.Heading>
          <Input
            value={search}
            onChange={this.handleSearchChange}
            placeholder={t('microservices.searchPlaceholder')}
          />
          {lastUpdated && <LastUpdated date={lastUpdated} loading={loading} />}
        </Styles.Heading>
        <MicroservicesApplications data={data} />
      </Styles.Wrapper>
    );
  }
}

Microservices.propTypes = {
  data: microservicesType,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  polling: PropTypes.shape({
    count: PropTypes.number,
    lastUpdated: PropTypes.instanceOf(Date),
  }),
  search: PropTypes.string,
  startPolling: PropTypes.func,
  stopPolling: PropTypes.func,
  searchMicroservices: PropTypes.func,
};

export default Microservices;
