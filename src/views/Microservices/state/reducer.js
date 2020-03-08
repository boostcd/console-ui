import createRequestReducer from '../../../utils/createRequestReducer';
import ACTIONS from './actions';

export default createRequestReducer(Object.values(ACTIONS));
