const ACTIONS = {
  POLL_START: 'features/POLL_START',
  POLL_STOP: 'features/POLL_STOP',
  PENDING: 'features/PENDING',
  SUCCESS: 'features/SUCCESS',
  FAILURE: 'features/FAILURE',
  SEARCH: 'features/SEARCH',
};

export const startPollingFeatures = () => ({
  type: ACTIONS.POLL_START,
});

export const stopPollingFeatures = () => ({
  type: ACTIONS.POLL_STOP,
});

export const fetchFeaturesPending = () => ({
  type: ACTIONS.PENDING,
});

export const fetchFeaturesSuccess = (data) => ({
  type: ACTIONS.SUCCESS,
  payload: {
    data,
  },
});

export const fetchFeaturesFailure = (error) => ({
  type: ACTIONS.FAILURE,
  payload: {
    error,
  },
});

export const searchFeatures = (searchQuery) => ({
  type: ACTIONS.SEARCH,
  payload: {
    searchQuery,
  },
});

export default ACTIONS;
