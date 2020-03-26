import ACTIONS, {
  fetchUsers,
  fetchUsersFailure,
  fetchUsersPending,
  fetchUsersSuccess,
} from './actions';

describe('Users: actions', () => {
  it('should create the FETCH action', () => {
    expect(fetchUsers()).toEqual({
      type: ACTIONS.FETCH,
    });
  });

  it('should create the PENDING action', () => {
    expect(fetchUsersPending()).toEqual({
      type: ACTIONS.PENDING,
    });
  });

  it('should create the SUCCESS action', () => {
    const data = [{ foo: 'bar' }];

    expect(fetchUsersSuccess(data)).toEqual({
      type: ACTIONS.SUCCESS,
      payload: {
        data,
      },
    });
  });

  it('should create the FAILURE action', () => {
    const error = 'Example error message!';

    expect(fetchUsersFailure(error)).toEqual({
      type: ACTIONS.FAILURE,
      payload: {
        error,
      },
    });
  });
});
