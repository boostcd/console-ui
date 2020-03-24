import { call, delay, put, race, take } from 'redux-saga/effects';

import gatewayApi from '../../../apis/GatewayApi';
import { POLLING_DELAY } from '../../../constants';
import ACTIONS, {
  fetchFeaturesFailure,
  fetchFeaturesPending,
  fetchFeaturesSuccess,
} from './actions';

function* fetchFeatures() {
  while (true) {
    try {
      yield put(fetchFeaturesPending());
      const data = yield call(gatewayApi.getFeatures);
      yield put(fetchFeaturesSuccess(data));
    } catch (error) {
      yield put(fetchFeaturesFailure(error));
    } finally {
      yield delay(POLLING_DELAY);
    }
  }
}

export default function* watchFetchFeatures() {
  while (true) {
    yield take(ACTIONS.POLL_START);
    yield race([call(fetchFeatures), take(ACTIONS.POLL_STOP)]);
  }
}
