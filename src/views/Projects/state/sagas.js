import { call, delay, put, race, take } from 'redux-saga/effects';

import gatewayApi from '../../../apis/GatewayApi';
import { POLLING_DELAY } from '../../../constants';
import ACTIONS, {
  fetchProjectsFailure,
  fetchProjectsPending,
  fetchProjectsSuccess,
} from './actions';

function* sagaWorker() {
  while (true) {
    try {
      yield put(fetchProjectsPending());
      const data = yield call(gatewayApi.getProjects);
      yield put(fetchProjectsSuccess(data));
    } catch (error) {
      yield put(fetchProjectsFailure(error));
    } finally {
      yield delay(POLLING_DELAY);
    }
  }
}

export default function*() {
  while (true) {
    yield take(ACTIONS.POLL_START);
    yield race([call(sagaWorker), take(ACTIONS.POLL_STOP)]);
  }
}
