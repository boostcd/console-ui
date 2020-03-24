import ACTIONS, {
  fetchFeaturesFailure,
  fetchFeaturesPending,
  fetchFeaturesSuccess,
  searchFeatures,
  startPollingFeatures,
  stopPollingFeatures,
} from './actions';

describe('Features: state/actions', () => {
  it('should create the POLL_START action', () => {
    expect(startPollingFeatures()).toEqual({
      type: ACTIONS.POLL_START,
    });
  });

  it('should create the POLL_STOP action', () => {
    expect(stopPollingFeatures()).toEqual({
      type: ACTIONS.POLL_STOP,
    });
  });

  it('should create the PENDING action', () => {
    expect(fetchFeaturesPending()).toEqual({
      type: ACTIONS.PENDING,
    });
  });

  it('should create the SUCCESS action', () => {
    const data = [{ foo: 'bar' }];

    expect(fetchFeaturesSuccess(data)).toEqual({
      type: ACTIONS.SUCCESS,
      payload: data,
    });
  });

  it('should create the FAILURE action', () => {
    const error = 'Example error message!';

    expect(fetchFeaturesFailure(error)).toEqual({
      type: ACTIONS.FAILURE,
      payload: {
        error,
      },
    });
  });

  it('should create the SEARCH action', () => {
    const search = 'foo-bar';

    expect(searchFeatures(search)).toEqual({
      type: ACTIONS.SEARCH,
      payload: {
        search,
      },
    });
  });
});
