import { toast } from 'react-toastify';
import { call, delay, put, race, take } from 'redux-saga/effects';

import gatewayApi from '../../../apis/GatewayApi';
import { POLLING_DELAY } from '../../../constants';
import t from '../../../utils/translate';
import ACTIONS, {
  fetchFeaturesFailure,
  fetchFeaturesPending,
  fetchFeaturesSuccess,
} from './actions';

function* sagaWorker() {
  while (true) {
    try {
      yield put(fetchFeaturesPending());
      const data = yield call(gatewayApi.getFeatures);
      yield put(fetchFeaturesSuccess(data));
    } catch (error) {
      yield put(fetchFeaturesFailure(error));
      toast.error(t('features.errorFallback'), {
        toastId: 'features',
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
