import { toast } from 'react-toastify';
import { call, put, takeEvery } from 'redux-saga/effects';

import gatewayApi from '../../../apis/GatewayApi';
import t from '../../../utils/translate';
import ACTIONS, {
  fetchMicroserviceFailure,
  fetchMicroservicePending,
  fetchMicroserviceSuccess,
} from './actions';

function* sagaWorker(action) {
  const { payload } = action;
  const { environmentName, appName } = payload;

  try {
    yield put(fetchMicroservicePending());
    const data = yield call(gatewayApi.getMicroservice, environmentName, appName);
    yield put(fetchMicroserviceSuccess(data));
  } catch (error) {
    yield put(fetchMicroserviceFailure(error));
    toast.error(t('microservice.errorFallback', { appName }), {
      toastId: `${environmentName}@${appName}`,
    });
  }
}

export default function*() {
  yield takeEvery(ACTIONS.FETCH, sagaWorker);
}
