import { combineReducers } from 'redux';

import environment from '../views/Environment/state/reducer';
import environments from '../views/Environments/state/reducer';
import features from '../views/Features/state/reducer';
import libraries from '../views/Libraries/state/reducer';
import microservice from '../views/Microservice/state/reducer';
import microservices from '../views/Microservices/state/reducer';
import users from './users/reducer';

// Pass new reducers to the combineReducers call
export default combineReducers({
  users,
  features,
  microservice,
  microservices,
  environment,
  environments,
  libraries,
});
