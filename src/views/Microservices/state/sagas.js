import { call, put, takeEvery } from 'redux-saga/effects';

import ConsoleApi from '../../../apis/ConsoleApi';
import {
  FETCH_MICROSERVICES_REQUEST,
  fetchMicroservicesFailure,
  fetchMicroservicesPending,
  fetchMicroservicesSuccess,
} from './actions';

// TODO: Update this environment variable with the correct one for the service
const api = new ConsoleApi(window.boost.CONSOLE_API_SERVICE_URI);

function* fetchMicroservicesSaga() {
  try {
    yield put(fetchMicroservicesPending());
    const data = yield call(api.getMicroservices);
    yield put(fetchMicroservicesSuccess(data));
  } catch (error) {
    yield put(fetchMicroservicesFailure(error));
  }
}

export default function*() {
  yield takeEvery(FETCH_MICROSERVICES_REQUEST, fetchMicroservicesSaga);
}
