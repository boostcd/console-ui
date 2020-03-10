import { call, delay, put, race, take } from 'redux-saga/effects';

import gatewayApi from '../../../apis/GatewayApi';
import { POLLING_DELAY } from '../../../constants/polling';
import ACTIONS, {
  fetchMicroservicesFailure,
  fetchMicroservicesPending,
  fetchMicroservicesSuccess,
} from './actions';

function* pollSagaWorker() {
  while (true) {
    try {
      yield put(fetchMicroservicesPending());
      const data = yield call(gatewayApi.getMicroservices);
      yield put(fetchMicroservicesSuccess(data));
      yield delay(POLLING_DELAY);
    } catch (error) {
      yield put(fetchMicroservicesFailure(error));
    }
  }
}

export default function*() {
  while (true) {
    yield take(ACTIONS.POLL_START);
    yield race([call(pollSagaWorker), take(ACTIONS.POLL_STOP)]);
  }
}
