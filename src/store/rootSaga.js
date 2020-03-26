import { all, fork } from 'redux-saga/effects';

import featuresSaga from '../views/Features/state/saga';
import microserviceSaga from '../views/Microservice/state/saga';
import microservicesSaga from '../views/Microservices/state/saga';
import projectSaga from '../views/Project/state/saga';
import projectsSaga from '../views/Projects/state/saga';
import usersSaga from './users/saga';

// Add new sagas to this array
const sagas = [
  usersSaga,
  featuresSaga,
  microserviceSaga,
  microservicesSaga,
  projectSaga,
  projectsSaga,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
