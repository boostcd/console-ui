import { combineReducers } from 'redux';

import features from '../views/Features/state/reducer';
import microservices from '../views/Microservices/state/reducer';

export default combineReducers({
  microservices,
  features,
});
