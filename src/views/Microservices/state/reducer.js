import createRequestReducer from '../../../utils/createRequestReducer';
import ACTIONS from './actions';

export const initialState = {
  data: {},
  error: false,
  loading: true,
  polling: true,
  lastUpdated: undefined,
};

export default createRequestReducer(initialState, Object.values(ACTIONS));
