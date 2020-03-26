import { call, put, takeEvery } from 'redux-saga/effects';

import gatewayApi from '../../apis/GatewayApi';
import ACTIONS, { fetchUsersFailure, fetchUsersPending, fetchUsersSuccess } from './actions';

function* fetchUsers() {
  try {
    yield put(fetchUsersPending());
    const data = yield call(gatewayApi.getUsers);
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

export default function* watchFetchUsers() {
  yield takeEvery(ACTIONS.FETCH, fetchUsers);
}
