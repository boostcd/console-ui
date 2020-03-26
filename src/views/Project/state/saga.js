import { call, put, takeEvery } from 'redux-saga/effects';

import gatewayApi from '../../../apis/GatewayApi';
import ACTIONS, { fetchProjectFailure, fetchProjectPending, fetchProjectSuccess } from './actions';

function* fetchProject(action) {
  const { payload } = action;
  const { namespace } = payload;

  try {
    yield put(fetchProjectPending());
    const data = yield call(gatewayApi.getProject, namespace);
    yield put(fetchProjectSuccess(data));
  } catch (error) {
    yield put(fetchProjectFailure(error));
  }
}

export default function*() {
  yield takeEvery(ACTIONS.FETCH, fetchProject);
}
