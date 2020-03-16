import { call, put, takeEvery } from 'redux-saga/effects';

import gatewayApi from '../../../apis/GatewayApi';
import ACTIONS, {
  fetchProjectsFailure,
  fetchProjectsPending,
  fetchProjectsSuccess,
} from './actions';

function* sagaWorker() {
  try {
    yield put(fetchProjectsPending());
    const data = yield call(gatewayApi.getProjects);
    yield put(fetchProjectsSuccess(data));
  } catch (error) {
    yield put(fetchProjectsFailure(error));
  }
}

export default function*() {
  yield takeEvery(ACTIONS.FETCH, sagaWorker);
}
