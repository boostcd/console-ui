import { call, put, takeEvery } from 'redux-saga/effects';

import gatewayApi from '../../../apis/GatewayApi';
import ACTIONS, {
  fetchLibrariesFailure,
  fetchLibrariesPending,
  fetchLibrariesSuccess,
} from './actions';

export function* fetchLibraries() {
  try {
    yield put(fetchLibrariesPending());
    const data = yield call(gatewayApi.getLibraries);
    yield put(fetchLibrariesSuccess(data));
  } catch (error) {
    yield put(fetchLibrariesFailure(error));
  }
}

export default function*() {
  yield takeEvery(ACTIONS.FETCH, fetchLibraries);
}
