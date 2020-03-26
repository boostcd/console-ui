import ACTIONS from './actions';

export const initialState = {
  data: [],
  error: false,
  loading: true,
  polling: {
    enabled: false,
    count: 0,
    lastUpdated: undefined,
  },
};

export default (state = initialState, action = {}) => {
  const { type, payload = {} } = action;

  switch (type) {
    case ACTIONS.POLL_START:
      return {
        ...state,
        polling: {
          ...state.polling,
          enabled: true,
        },
      };

    case ACTIONS.POLL_STOP:
      return {
        ...state,
        polling: {
          ...state.polling,
          enabled: false,
        },
      };

    case ACTIONS.PENDING:
      return {
        ...state,
        error: false,
        loading: true,
      };

    case ACTIONS.SUCCESS:
      return {
        ...state,
        data: payload.data,
        error: false,
        loading: false,
        polling: {
          ...state.polling,
          count: state.polling.count + 1,
          lastUpdated: new Date(),
        },
      };

    case ACTIONS.FAILURE:
      return {
        ...state,
        // data: payload.error,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};
