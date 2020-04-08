import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import mockUsers from '../../apis/examples/users.json';
import gatewayApi from '../../apis/GatewayApi';
import RequestError from '../../utils/RequestError';
import { fetchUsersFailure, fetchUsersPending, fetchUsersSuccess } from './actions';
import { fetchUsers } from './saga';

jest.mock('../../apis/GatewayApi.js');

describe('Users: saga', () => {
  it('should fetch the data', () => {
    return expectSaga(fetchUsers)
      .put(fetchUsersPending())
      .provide(call.fn(gatewayApi.getUsers))
      .put(fetchUsersSuccess(mockUsers))
      .run();
  });

  it('should handle exceptions', () => {
    const error = new RequestError('Error fetching the users!');

    return expectSaga(fetchUsers)
      .put(fetchUsersPending())
      .provide([[call.fn(gatewayApi.getUsers), throwError(error)]])
      .put(fetchUsersFailure(error))
      .run();
  });
});
