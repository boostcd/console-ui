const ACTIONS = {
  POLL_START: 'environments/POLL_START',
  POLL_STOP: 'environments/POLL_STOP',
  PENDING: 'environments/PENDING',
  SUCCESS: 'environments/SUCCESS',
  FAILURE: 'environments/FAILURE',
};

export const startPollingEnvironments = () => ({
  type: ACTIONS.POLL_START,
});

export const stopPollingEnvironments = () => ({
  type: ACTIONS.POLL_STOP,
});

export const fetchEnvironmentsPending = () => ({
  type: ACTIONS.PENDING,
});

export const fetchEnvironmentsSuccess = (data) => ({
  type: ACTIONS.SUCCESS,
  payload: {
    data,
  },
});

export const fetchEnvironmentsFailure = (error) => ({
  type: ACTIONS.FAILURE,
  payload: {
    error,
  },
});

export default ACTIONS;
