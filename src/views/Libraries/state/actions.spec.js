import ACTIONS, {
  fetchLibraries,
  fetchLibrariesFailure,
  fetchLibrariesPending,
  fetchLibrariesSuccess,
} from './actions';

describe('Libraries: state/actions', () => {
  it('should create the FETCH action', () => {
    expect(fetchLibraries()).toEqual({
      type: ACTIONS.FETCH,
    });
  });

  it('should create the PENDING action', () => {
    expect(fetchLibrariesPending()).toEqual({
      type: ACTIONS.PENDING,
    });
  });

  it('should create the SUCCESS action', () => {
    const data = [{ foo: 'bar' }];

    expect(fetchLibrariesSuccess(data)).toEqual({
      type: ACTIONS.SUCCESS,
      payload: {
        data,
      },
    });
  });

  it('should create the FAILURE action', () => {
    const error = 'Example error message!';

    expect(fetchLibrariesFailure(error)).toEqual({
      type: ACTIONS.FAILURE,
      payload: {
        error,
      },
    });
  });
});
