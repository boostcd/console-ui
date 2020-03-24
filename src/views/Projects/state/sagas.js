import { call, delay, put, race, take } from 'redux-saga/effects';

import gatewayApi from '../../../apis/GatewayApi';
import { POLLING_DELAY } from '../../../constants';
import ACTIONS, {
  fetchProjectsFailure,
  fetchProjectsPending,
  fetchProjectsSuccess,
} from './actions';

function* fetchProjects() {
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

export default function* watchFetchProjects() {
  while (true) {
    yield take(ACTIONS.POLL_START);
    yield race([call(fetchProjects), take(ACTIONS.POLL_STOP)]);
  }
}
