const initialState = {
  data: {},
  error: false,
  loading: true,
  polling: {
    enabled: true,
    count: 0,
    lastUpdated: undefined,
  },
};

export default (stateActions) => {
  const [PENDING, SUCCESS, FAILED, POLL_START, POLL_END] = stateActions;

  return (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
      case PENDING:
        return {
          ...state,
          error: false,
          loading: true,
        };

      case SUCCESS:
        return {
          ...state,
          data: {
            ...state.data,
            ...payload,
          },
          error: false,
          loading: false,
          polling: {
            ...state.polling,
            count: state.polling.count + 1,
            lastUpdated: new Date(),
          },
        };

      case FAILED:
        return {
          ...state,
          data: payload.error,
          error: true,
          loading: false,
          polling: {
            ...state.polling,
            enabled: false,
          },
        };

      case POLL_START:
        return {
          ...state,
          polling: {
            ...state.polling,
            enabled: true,
          },
        };

      case POLL_END:
        return {
          ...state,
          polling: {
            ...state.polling,
            enabled: false,
          },
        };

      default:
        return state;
    }
  };
};
