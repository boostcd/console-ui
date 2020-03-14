import { toast } from 'react-toastify';
import { call, delay, put, race, take } from 'redux-saga/effects';

import gatewayApi from '../../../apis/GatewayApi';
import { POLLING_DELAY } from '../../../constants';
import t from '../../../utils/translate';
import ACTIONS, {
  fetchMicroservicesFailure,
  fetchMicroservicesPending,
  fetchMicroservicesSuccess,
} from './actions';

function* sagaWorker() {
  while (true) {
    try {
      yield put(fetchMicroservicesPending());
      const data = yield call(gatewayApi.getMicroservices);
      yield put(fetchMicroservicesSuccess(data));
    } catch (error) {
      yield put(fetchMicroservicesFailure(error));
      toast.error(t('microservices.errorFallback'), {
        toastId: 'microservices',
      });
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
