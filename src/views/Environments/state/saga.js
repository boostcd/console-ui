import { call, delay, put, race, take } from 'redux-saga/effects';

import gatewayApi from '../../../apis/GatewayApi';
import { POLLING_DELAY } from '../../../constants';
import ACTIONS, {
  fetchEnvironmentsFailure,
  fetchEnvironmentsPending,
  fetchEnvironmentsSuccess,
} from './actions';

export function* fetchEnvironments() {
  while (true) {
    try {
      yield put(fetchEnvironmentsPending());
      const data = yield call(gatewayApi.getEnvironments);
      yield put(fetchEnvironmentsSuccess(data));
    } catch (error) {
      yield put(fetchEnvironmentsFailure(error));
    } finally {
      yield delay(POLLING_DELAY);
    }
  }
}

export default function*() {
  while (true) {
    yield take(ACTIONS.POLL_START);
    yield race([call(fetchEnvironments), take(ACTIONS.POLL_STOP)]);
  }
}
