import ACTIONS, {
  fetchMicroservicesFailure,
  fetchMicroservicesPending,
  fetchMicroservicesSuccess,
  searchMicroservices,
  startPollingMicroservices,
  stopPollingMicroservices,
} from './actions';

describe('Microservices: state/actions', () => {
  it('should create the POLL_START action', () => {
    expect(startPollingMicroservices()).toEqual({
      type: ACTIONS.POLL_START,
    });
  });

  it('should create the POLL_STOP action', () => {
    expect(stopPollingMicroservices()).toEqual({
      type: ACTIONS.POLL_STOP,
    });
  });

  it('should create the PENDING action', () => {
    expect(fetchMicroservicesPending()).toEqual({
      type: ACTIONS.PENDING,
    });
  });

  it('should create the SUCCESS action', () => {
    const data = [{ foo: 'bar' }];

    expect(fetchMicroservicesSuccess(data)).toEqual({
      type: ACTIONS.SUCCESS,
      payload: {
        data,
      },
    });
  });

  it('should create the FAILURE action', () => {
    const error = 'Example error message!';

    expect(fetchMicroservicesFailure(error)).toEqual({
      type: ACTIONS.FAILURE,
      payload: {
        error,
      },
    });
  });

  it('should create the SEARCH action', () => {
    const searchQuery = 'foo-bar';

    expect(searchMicroservices(searchQuery)).toEqual({
      type: ACTIONS.SEARCH,
      payload: {
        searchQuery,
      },
    });
  });
});
