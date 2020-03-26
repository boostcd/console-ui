import ACTIONS, {
  fetchProject,
  fetchProjectFailure,
  fetchProjectPending,
  fetchProjectSuccess,
} from './actions';

describe('Project: state/actions', () => {
  it('should create the FETCH action', () => {
    const namespace = 'example-namespace';

    expect(fetchProject(namespace)).toEqual({
      type: ACTIONS.FETCH,
      payload: {
        namespace,
      },
    });
  });

  it('should create the PENDING action', () => {
    expect(fetchProjectPending()).toEqual({
      type: ACTIONS.PENDING,
    });
  });

  it('should create the SUCCESS action', () => {
    const data = [{ foo: 'bar' }];

    expect(fetchProjectSuccess(data)).toEqual({
      type: ACTIONS.SUCCESS,
      payload: {
        data,
      },
    });
  });

  it('should create the FAILURE action', () => {
    const error = 'Example error message!';

    expect(fetchProjectFailure(error)).toEqual({
      type: ACTIONS.FAILURE,
      payload: {
        error,
      },
    });
  });
});
