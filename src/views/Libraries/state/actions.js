const ACTIONS = {
  FETCH: 'libraries/FETCH',
  PENDING: 'libraries/PENDING',
  SUCCESS: 'libraries/SUCCESS',
  FAILURE: 'libraries/FAILURE',
};

export const fetchLibraries = () => ({
  type: ACTIONS.FETCH,
});

export const fetchLibrariesPending = () => ({
  type: ACTIONS.PENDING,
});

export const fetchLibrariesSuccess = (data) => ({
  type: ACTIONS.SUCCESS,
  payload: {
    data,
  },
});

export const fetchLibrariesFailure = (error) => ({
  type: ACTIONS.FAILURE,
  payload: {
    error,
  },
});

export default ACTIONS;
