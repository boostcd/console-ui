import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import mockMicroservices from '../../../apis/examples/microservices.json';
import gatewayApi from '../../../apis/GatewayApi';
import RequestError from '../../../utils/RequestError';
import {
  fetchMicroservicesFailure,
  fetchMicroservicesPending,
  fetchMicroservicesSuccess,
} from './actions';
import { fetchMicroservices } from './saga';

jest.mock('../../../apis/GatewayApi.js');

describe('Microservices: state/saga', () => {
  it('should fetch the microservices', () => {
    return expectSaga(fetchMicroservices)
      .put(fetchMicroservicesPending())
      .provide(call.fn(gatewayApi.getMicroservices))
      .put(fetchMicroservicesSuccess(mockMicroservices))
      .silentRun();
  });

  it('should handle exceptions', () => {
    const error = new RequestError('Error fetching the microservices!');

    return expectSaga(fetchMicroservices)
      .put(fetchMicroservicesPending())
      .provide([[call.fn(gatewayApi.getMicroservices), throwError(error)]])
      .put(fetchMicroservicesFailure(error))
      .silentRun();
  });
});
