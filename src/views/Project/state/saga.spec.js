import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import mockProject from '../../../apis/examples/project.json';
import gatewayApi from '../../../apis/GatewayApi';
import RequestError from '../../../utils/RequestError';
import {
  fetchProject as fetchProjectAction,
  fetchProjectFailure,
  fetchProjectPending,
  fetchProjectSuccess,
} from './actions';
import { fetchProject } from './saga';

jest.mock('../../../apis/GatewayApi.js');

describe('Project: state/saga', () => {
  const namespace = 'namespace-name';

  it('should fetch the project', () => {
    return expectSaga(fetchProject, fetchProjectAction(namespace))
      .put(fetchProjectPending())
      .provide(call.fn(gatewayApi.getProject))
      .put(fetchProjectSuccess(mockProject))
      .run();
  });

  it('should handle exceptions', () => {
    const error = new RequestError('Error fetching the project!');

    return expectSaga(fetchProject, fetchProjectAction(namespace))
      .put(fetchProjectPending())
      .provide([[call.fn(gatewayApi.getProject), throwError(error)]])
      .put(fetchProjectFailure(error))
      .run();
  });
});
