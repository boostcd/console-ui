const ACTIONS = {
  PENDING: 'microservices/PENDING',
  SUCCESS: 'microservices/SUCCESS',
  FAILURE: 'microservices/FAILURE',
  POLL_START: 'microservices/POLL_START',
  POLL_STOP: 'microservices/POLL_STOP',
};

export const fetchMicroservices = () => ({
  type: ACTIONS.POLL_START,
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
