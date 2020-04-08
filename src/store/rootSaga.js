import { all, fork } from 'redux-saga/effects';

import environmentSaga from '../views/Environment/state/saga';
import environmentsSaga from '../views/Environments/state/saga';
import featuresSaga from '../views/Features/state/saga';
// import librariesSaga from '../views/Libraries/state/saga';
import microserviceSaga from '../views/Microservice/state/saga';
import microservicesSaga from '../views/Microservices/state/saga';
import usersSaga from './users/saga';

// Add new sagas to this array
const sagas = [
  usersSaga,
  featuresSaga,
  microserviceSaga,
  microservicesSaga,
  environmentSaga,
  environmentsSaga,
  // librariesSaga,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
