import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import mockEnvironments from '../../../apis/examples/environments.json';
import gatewayApi from '../../../apis/GatewayApi';
import RequestError from '../../../utils/RequestError';
import {
  fetchEnvironmentsFailure,
  fetchEnvironmentsPending,
  fetchEnvironmentsSuccess,
} from './actions';
import { fetchEnvironments } from './saga';

jest.mock('../../../apis/GatewayApi.js');

describe('Environments: state/saga', () => {
  it('should fetch the data', () => {
    return expectSaga(fetchEnvironments)
      .put(fetchEnvironmentsPending())
      .provide(call.fn(gatewayApi.getEnvironments))
      .put(fetchEnvironmentsSuccess(mockEnvironments))
      .silentRun();
  });

  it('should handle exceptions', () => {
    const error = new RequestError('Error fetching the environments!');

    return expectSaga(fetchEnvironments)
      .put(fetchEnvironmentsPending())
      .provide([[call.fn(gatewayApi.getEnvironments), throwError(error)]])
      .put(fetchEnvironmentsFailure(error))
      .silentRun();
  });
});
