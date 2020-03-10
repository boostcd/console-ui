const ACTIONS = {
  POLL_START: 'microservices/POLL_START',
  POLL_STOP: 'microservices/POLL_STOP',
  PENDING: 'microservices/PENDING',
  SUCCESS: 'microservices/SUCCESS',
  FAILURE: 'microservices/FAILURE',
};

export const startPollingMicroservices = () => ({
  type: ACTIONS.POLL_START,
});

export const stopPollingMicroservices = () => ({
  type: ACTIONS.POLL_STOP,
});

export const fetchMicroservicesPending = () => ({
  type: ACTIONS.PENDING,
});

export const fetchMicroservicesSuccess = (data) => ({
  type: ACTIONS.SUCCESS,
  payload: data,
});

export const fetchMicroservicesFailure = (error) => ({
  type: ACTIONS.FAILURE,
  payload: {
    error,
  },
});

export default ACTIONS;
