const ACTIONS = {
  FETCH: 'users/FETCH',
  PENDING: 'users/PENDING',
  SUCCESS: 'users/SUCCESS',
  FAILURE: 'users/FAILURE',
};

export const fetchUsers = () => ({
  type: ACTIONS.FETCH,
});

export const fetchUsersPending = () => ({
  type: ACTIONS.PENDING,
});

export const fetchUsersSuccess = (data) => ({
  type: ACTIONS.SUCCESS,
  payload: {
    data,
  },
});

export const fetchUsersFailure = (error) => ({
  type: ACTIONS.FAILURE,
  payload: {
    error,
  },
});

export default ACTIONS;
