const ACTIONS = {
  FETCH: 'microservice/FETCH',
  POLL_STOP: 'microservice/POLL_STOP',
  PENDING: 'microservice/PENDING',
  SUCCESS: 'microservice/SUCCESS',
  FAILURE: 'microservice/FAILURE',
};

export const fetchMicroservice = (environmentName, appName) => ({
  type: ACTIONS.FETCH,
  payload: {
    environmentName,
    appName,
  },
});

export const fetchMicroservicePending = () => ({
  type: ACTIONS.PENDING,
});

export const fetchMicroserviceSuccess = (data) => ({
  type: ACTIONS.SUCCESS,
  payload: data,
});

export const fetchMicroserviceFailure = (error) => ({
  type: ACTIONS.FAILURE,
  payload: {
    error,
  },
});

export default ACTIONS;
