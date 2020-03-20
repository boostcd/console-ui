import { combineReducers } from 'redux';

import features from '../views/Features/state/reducer';
import microservice from '../views/Microservice/state/reducer';
import microservices from '../views/Microservices/state/reducer';
import project from '../views/Project/state/reducer';
import projects from '../views/Projects/state/reducer';

export default combineReducers({
  features,
  microservice,
  microservices,
  project,
  projects,
});
