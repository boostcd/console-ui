import { call, put, takeEvery } from 'redux-saga/effects';

import gatewayApi from '../../../apis/GatewayApi';
import ACTIONS, {
  fetchMicroserviceFailure,
  fetchMicroservicePending,
  fetchMicroserviceSuccess,
} from './actions';

function* fetchMicroservice(action) {
  const { payload } = action;
  const { environmentName, appName } = payload;

  try {
    yield put(fetchMicroservicePending());
    const data = yield call(gatewayApi.getMicroservice, environmentName, appName);
    yield put(fetchMicroserviceSuccess(data));
  } catch (error) {
    yield put(fetchMicroserviceFailure(error));
  }
}

export default function* watchFetchMicroservice() {
  yield takeEvery(ACTIONS.FETCH, fetchMicroservice);
}
