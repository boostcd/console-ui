import ACTIONS, {
  fetchEnvironment,
  fetchEnvironmentFailure,
  fetchEnvironmentPending,
  fetchEnvironmentSuccess,
} from './actions';

describe('Environment: state/actions', () => {
  it('should create the FETCH action', () => {
    const namespace = 'example-namespace';

    expect(fetchEnvironment(namespace)).toEqual({
      type: ACTIONS.FETCH,
      payload: {
        namespace,
      },
    });
  });

  it('should create the PENDING action', () => {
    expect(fetchEnvironmentPending()).toEqual({
      type: ACTIONS.PENDING,
    });
  });

  it('should create the SUCCESS action', () => {
    const data = [{ foo: 'bar' }];

    expect(fetchEnvironmentSuccess(data)).toEqual({
      type: ACTIONS.SUCCESS,
      payload: {
        data,
      },
    });
  });

  it('should create the FAILURE action', () => {
    const error = 'Example error message!';

    expect(fetchEnvironmentFailure(error)).toEqual({
      type: ACTIONS.FAILURE,
      payload: {
        error,
      },
    });
  });
});
