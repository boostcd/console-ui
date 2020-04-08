import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import mockEnvironment from '../../../apis/examples/environment.json';
import gatewayApi from '../../../apis/GatewayApi';
import RequestError from '../../../utils/RequestError';
import {
  fetchEnvironment as fetchEnvironmentAction,
  fetchEnvironmentFailure,
  fetchEnvironmentPending,
  fetchEnvironmentSuccess,
} from './actions';
import { fetchEnvironment } from './saga';

jest.mock('../../../apis/GatewayApi.js');

describe('Environment: state/saga', () => {
  const namespace = 'namespace-name';

  it('should fetch the data', () => {
    return expectSaga(fetchEnvironment, fetchEnvironmentAction(namespace))
      .put(fetchEnvironmentPending())
      .provide(call.fn(gatewayApi.getEnvironment))
      .put(fetchEnvironmentSuccess(mockEnvironment))
      .run();
  });

  it('should handle exceptions', () => {
    const error = new RequestError('Error fetching the environment!');

    return expectSaga(fetchEnvironment, fetchEnvironmentAction(namespace))
      .put(fetchEnvironmentPending())
      .provide([[call.fn(gatewayApi.getEnvironment), throwError(error)]])
      .put(fetchEnvironmentFailure(error))
      .run();
  });
});
