const ACTIONS = {
  FETCH: 'projects/FETCH',
  PENDING: 'projects/PENDING',
  SUCCESS: 'projects/SUCCESS',
  FAILURE: 'projects/FAILURE',
};

export const fetchProjects = () => ({
  type: ACTIONS.FETCH,
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
