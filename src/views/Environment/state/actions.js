const ACTIONS = {
  FETCH: 'environment/FETCH',
  PENDING: 'environment/PENDING',
  SUCCESS: 'environment/SUCCESS',
  FAILURE: 'environment/FAILURE',
};

export const fetchEnvironment = (namespace) => ({
  type: ACTIONS.FETCH,
  payload: {
    namespace,
  },
});

export const fetchEnvironmentPending = () => ({
  type: ACTIONS.PENDING,
});

export const fetchEnvironmentSuccess = (data) => ({
  type: ACTIONS.SUCCESS,
  payload: {
    data,
  },
});

export const fetchEnvironmentFailure = (error) => ({
  type: ACTIONS.FAILURE,
  payload: {
    error,
  },
});

export default ACTIONS;
