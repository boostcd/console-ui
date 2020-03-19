import ACTIONS from './actions';

const initialState = {
  data: [],
  error: false,
  loading: true,
  polling: {
    enabled: true,
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
        data: payload,
        error: false,
        loading: false,
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
