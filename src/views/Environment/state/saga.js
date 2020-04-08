import { call, put, takeEvery } from 'redux-saga/effects';

import gatewayApi from '../../../apis/GatewayApi';
import ACTIONS, {
  fetchEnvironmentFailure,
  fetchEnvironmentPending,
  fetchEnvironmentSuccess,
} from './actions';

export function* fetchEnvironment(action) {
  const { payload } = action;
  const { namespace } = payload;

  try {
    yield put(fetchEnvironmentPending());
    const data = yield call(gatewayApi.getEnvironment, namespace);
    yield put(fetchEnvironmentSuccess(data));
  } catch (error) {
    yield put(fetchEnvironmentFailure(error));
  }
}

export default function*() {
  yield takeEvery(ACTIONS.FETCH, fetchEnvironment);
}
