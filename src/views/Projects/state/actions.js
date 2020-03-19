const ACTIONS = {
  POLL_START: 'projects/POLL_START',
  POLL_STOP: 'projects/POLL_STOP',
  PENDING: 'projects/PENDING',
  SUCCESS: 'projects/SUCCESS',
  FAILURE: 'projects/FAILURE',
};

export const startPollingProjects = () => ({
  type: ACTIONS.POLL_START,
});

export const stopPollingProjects = () => ({
  type: ACTIONS.POLL_STOP,
});

export const fetchProjectsPending = () => ({
  type: ACTIONS.PENDING,
});

export const fetchProjectsSuccess = (data) => ({
  type: ACTIONS.SUCCESS,
  payload: data,
});

export const fetchProjectsFailure = (error) => ({
  type: ACTIONS.FAILURE,
  payload: {
    error,
  },
});

export default ACTIONS;
