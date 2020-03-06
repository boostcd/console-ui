export default (initialState, stateActions) => {
  const [PENDING, SUCCESS, FAILED] = stateActions;

  return (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
      case PENDING:
        return {
          ...state,
          loading: true,
          error: false,
        };

      case SUCCESS:
        return {
          ...state,
          data: {
            ...state.data,
            ...payload,
          },
          loading: false,
          error: false,
        };

      case FAILED:
        return {
          ...state,
          data: payload.error,
          loading: false,
          error: true,
        };

      default:
        return state;
    }
  };
};
