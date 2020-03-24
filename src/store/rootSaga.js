import { all, fork } from 'redux-saga/effects';

import featuresSaga from '../views/Features/state/sagas';
import microserviceSaga from '../views/Microservice/state/sagas';
import microservicesSaga from '../views/Microservices/state/sagas';
import projectSaga from '../views/Project/state/sagas';
import projectsSaga from '../views/Projects/state/sagas';

// Add new sagas to this array
const sagas = [featuresSaga, microserviceSaga, microservicesSaga, projectSaga, projectsSaga];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
