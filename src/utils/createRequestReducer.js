export default (initialState, stateActions) => {
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
          lastUpdated: new Date(),
        };

      case FAILED:
        return {
          ...state,
          data: payload.error,
          error: true,
          loading: false,
          polling: false,
        };

      case POLL_START:
        return {
          ...state,
          polling: true,
        };

      case POLL_END:
        return {
          ...state,
          polling: false,
          loading: false,
        };

      default:
        return state;
    }
  };
};
