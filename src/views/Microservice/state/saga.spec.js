import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import mockMicroservice from '../../../apis/examples/microservice.json';
import gatewayApi from '../../../apis/GatewayApi';
import RequestError from '../../../utils/RequestError';
import {
  fetchMicroservice as fetchMicroserviceAction,
  fetchMicroserviceFailure,
  fetchMicroservicePending,
  fetchMicroserviceSuccess,
} from './actions';
import { fetchMicroservice } from './saga';

jest.mock('../../../apis/GatewayApi.js');

describe('Microservice: state/saga', () => {
  const environmentName = 'env-name';
  const appName = 'app-name';

  it('should fetch the microservice', () => {
    return expectSaga(fetchMicroservice, fetchMicroserviceAction(environmentName, appName))
      .put(fetchMicroservicePending())
      .provide(call.fn(gatewayApi.getMicroservices))
      .put(fetchMicroserviceSuccess(mockMicroservice))
      .run();
  });

  it('should handle exceptions', () => {
    const error = new RequestError('Error fetching the microservice!');

    return expectSaga(fetchMicroservice, fetchMicroserviceAction(environmentName, appName))
      .put(fetchMicroservicePending())
      .provide([[call.fn(gatewayApi.getMicroservice), throwError(error)]])
      .put(fetchMicroserviceFailure(error))
      .run();
  });
});
