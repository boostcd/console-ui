import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import mockFeatures from '../../../apis/examples/features.json';
import gatewayApi from '../../../apis/GatewayApi';
import RequestError from '../../../utils/RequestError';
import { fetchFeaturesFailure, fetchFeaturesPending, fetchFeaturesSuccess } from './actions';
import { fetchFeatures } from './saga';

jest.mock('../../../apis/GatewayApi.js');

describe('Features: state/saga', () => {
  it('should fetch the features', () => {
    return expectSaga(fetchFeatures)
      .put(fetchFeaturesPending())
      .provide(call.fn(gatewayApi.getFeatures))
      .put(fetchFeaturesSuccess(mockFeatures))
      .silentRun();
  });

  it('should handle exceptions', () => {
    const error = new RequestError('Error fetching the features!');

    return expectSaga(fetchFeatures)
      .put(fetchFeaturesPending())
      .provide([[call.fn(gatewayApi.getFeatures), throwError(error)]])
      .put(fetchFeaturesFailure(error))
      .silentRun();
  });
});
