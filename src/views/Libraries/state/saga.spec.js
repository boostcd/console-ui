import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import mockLibraries from '../../../apis/examples/libraries.json';
import gatewayApi from '../../../apis/GatewayApi';
import RequestError from '../../../utils/RequestError';
import { fetchLibrariesFailure, fetchLibrariesPending, fetchLibrariesSuccess } from './actions';
import { fetchLibraries } from './saga';

jest.mock('../../../apis/GatewayApi.js');

describe('Libraries: state/saga', () => {
  it('should fetch the libraries', () => {
    return expectSaga(fetchLibraries)
      .put(fetchLibrariesPending())
      .provide(call.fn(gatewayApi.getLibraries))
      .put(fetchLibrariesSuccess(mockLibraries))
      .run();
  });

  it('should handle exceptions', () => {
    const error = new RequestError('Error fetching the libraries!');

    return expectSaga(fetchLibraries)
      .put(fetchLibrariesPending())
      .provide([[call.fn(gatewayApi.getLibraries), throwError(error)]])
      .put(fetchLibrariesFailure(error))
      .run();
  });
});
