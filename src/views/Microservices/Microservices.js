import debounce from 'debounce';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import DataFallback from '../../components/DataFallback';
import ErrorFallback from '../../components/ErrorFallback';
import Input from '../../components/Input';
import LastUpdated from '../../components/LastUpdated';
import Loader from '../../components/Loader';
import { DEBOUNCE_DELAY } from '../../constants/debounce';
import { environmentType } from '../../types/microservices';
import * as Styles from './Microservices.styled';
import MicroservicesApplications from './MicroservicesApplications';
import MicroservicesControls from './MicroservicesControls';
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
  startPollingMicroservices: () => dispatch(startPollingMicroservices()),
  stopPollingMicroservices: () => dispatch(stopPollingMicroservices()),
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
    this.props.startPollingMicroservices();
  }

  componentWillUnmount() {
    this.props.stopPollingMicroservices();
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

    if (error) return <ErrorFallback />;
    if (loading && !count) return <Loader />;
    if (data && !data.length) return <DataFallback title='No services available!' />;

    return (
      <Styles.Wrapper>
        <Helmet title='Microservices' />
        <MicroservicesControls data={data} />
        <Styles.Heading>
          <Input
            value={search}
            onChange={this.handleSearchChange}
            placeholder='Search for microservices'
          />
          {lastUpdated && <LastUpdated date={lastUpdated} loading={loading} />}
        </Styles.Heading>
        <MicroservicesApplications data={data} />
      </Styles.Wrapper>
    );
  }
}

Microservices.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(environmentType)),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  polling: PropTypes.shape({
    count: PropTypes.number,
    lastUpdated: PropTypes.instanceOf(Date),
  }),
  search: PropTypes.string,
  startPollingMicroservices: PropTypes.func,
  stopPollingMicroservices: PropTypes.func,
  searchMicroservices: PropTypes.func,
};

export default Microservices;
