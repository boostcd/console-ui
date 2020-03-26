const ACTIONS = {
  FETCH: 'project/FETCH',
  PENDING: 'project/PENDING',
  SUCCESS: 'project/SUCCESS',
  FAILURE: 'project/FAILURE',
};

export const fetchProject = (namespace) => ({
  type: ACTIONS.FETCH,
  payload: {
    namespace,
  },
});

export const fetchProjectPending = () => ({
  type: ACTIONS.PENDING,
});

export const fetchProjectSuccess = (data) => ({
  type: ACTIONS.SUCCESS,
  payload: {
    data,
  },
});

export const fetchProjectFailure = (error) => ({
  type: ACTIONS.FAILURE,
  payload: {
    error,
  },
});

export default ACTIONS;
