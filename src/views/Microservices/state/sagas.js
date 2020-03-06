import { call, put, takeEvery } from 'redux-saga/effects';

import consoleApi from '../../../apis/ConsoleApi';
import {
  FETCH_MICROSERVICES_REQUEST,
  fetchMicroservicesFailure,
  fetchMicroservicesPending,
  fetchMicroservicesSuccess,
} from './actions';

function* fetchMicroservicesSaga() {
  try {
    yield put(fetchMicroservicesPending());
    const data = yield call(consoleApi.getMicroservices);
    yield put(fetchMicroservicesSuccess(data));
  } catch (error) {
    yield put(fetchMicroservicesFailure(error));
  }
}

export default function*() {
  yield takeEvery(FETCH_MICROSERVICES_REQUEST, fetchMicroservicesSaga);
}
