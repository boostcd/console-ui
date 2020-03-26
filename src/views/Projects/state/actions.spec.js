import ACTIONS, {
  fetchProjectsFailure,
  fetchProjectsPending,
  fetchProjectsSuccess,
  startPollingProjects,
  stopPollingProjects,
} from './actions';

describe('Projects: state/actions', () => {
  it('should create the POLL_START action', () => {
    expect(startPollingProjects()).toEqual({
      type: ACTIONS.POLL_START,
    });
  });

  it('should create the POLL_STOP action', () => {
    expect(stopPollingProjects()).toEqual({
      type: ACTIONS.POLL_STOP,
    });
  });

  it('should create the PENDING action', () => {
    expect(fetchProjectsPending()).toEqual({
      type: ACTIONS.PENDING,
    });
  });

  it('should create the SUCCESS action', () => {
    const data = [{ foo: 'bar' }];

    expect(fetchProjectsSuccess(data)).toEqual({
      type: ACTIONS.SUCCESS,
      payload: {
        data,
      },
    });
  });

  it('should create the FAILURE action', () => {
    const error = 'Example error message!';

    expect(fetchProjectsFailure(error)).toEqual({
      type: ACTIONS.FAILURE,
      payload: {
        error,
      },
    });
  });
});
