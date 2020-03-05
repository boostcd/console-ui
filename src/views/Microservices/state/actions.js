export const FETCH_MICROSERVICES_REQUEST = 'FETCH_MICROSERVICES_REQUEST';
export const FETCH_MICROSERVICES_PENDING = 'FETCH_MICROSERVICES_PENDING';
export const FETCH_MICROSERVICES_SUCCESS = 'FETCH_MICROSERVICES_SUCCESS';
export const FETCH_MICROSERVICES_FAILURE = 'FETCH_MICROSERVICES_FAILURE';

export const fetchMicroservices = () => ({
  type: FETCH_MICROSERVICES_REQUEST,
});

export const fetchMicroservicesPending = () => ({
  type: FETCH_MICROSERVICES_PENDING,
});

export const fetchMicroservicesSuccess = (data) => ({
  type: FETCH_MICROSERVICES_SUCCESS,
  payload: data,
});

export const fetchMicroservicesFailure = (error) => ({
  type: FETCH_MICROSERVICES_FAILURE,
  payload: {
    error,
  },
});
