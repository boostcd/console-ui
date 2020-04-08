import ACTIONS, {
  fetchEnvironmentsFailure,
  fetchEnvironmentsPending,
  fetchEnvironmentsSuccess,
  startPollingEnvironments,
  stopPollingEnvironments,
} from './actions';

describe('Environments: state/actions', () => {
  it('should create the POLL_START action', () => {
    expect(startPollingEnvironments()).toEqual({
      type: ACTIONS.POLL_START,
    });
  });

  it('should create the POLL_STOP action', () => {
    expect(stopPollingEnvironments()).toEqual({
      type: ACTIONS.POLL_STOP,
    });
  });

  it('should create the PENDING action', () => {
    expect(fetchEnvironmentsPending()).toEqual({
      type: ACTIONS.PENDING,
    });
  });

  it('should create the SUCCESS action', () => {
    const data = [{ foo: 'bar' }];

    expect(fetchEnvironmentsSuccess(data)).toEqual({
      type: ACTIONS.SUCCESS,
      payload: {
        data,
      },
    });
  });

  it('should create the FAILURE action', () => {
    const error = 'Example error message!';

    expect(fetchEnvironmentsFailure(error)).toEqual({
      type: ACTIONS.FAILURE,
      payload: {
        error,
      },
    });
  });
});
