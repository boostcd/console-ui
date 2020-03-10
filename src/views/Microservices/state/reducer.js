import createRequestReducer from '../../../utils/createRequestReducer';
import ACTIONS from './actions';

export default createRequestReducer({
  start: ACTIONS.POLL_START,
  stop: ACTIONS.POLL_END,
  pending: ACTIONS.PENDING,
  success: ACTIONS.SUCCESS,
  failure: ACTIONS.FAILURE,
});
