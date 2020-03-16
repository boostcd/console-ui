import ACTIONS from './actions';

const initialState = {
  data: [],
  error: false,
  loading: true,
};

export default (state = initialState, action = {}) => {
  const { type, payload = {} } = action;

  switch (type) {
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
