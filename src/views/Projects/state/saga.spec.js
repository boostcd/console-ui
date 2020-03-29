import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import mockProjects from '../../../apis/examples/projects.json';
import gatewayApi from '../../../apis/GatewayApi';
import RequestError from '../../../utils/RequestError';
import { fetchProjectsFailure, fetchProjectsPending, fetchProjectsSuccess } from './actions';
import { fetchProjects } from './saga';

jest.mock('../../../apis/GatewayApi.js');

describe('Projects: state/saga', () => {
  it('should fetch the projects', () => {
    return expectSaga(fetchProjects)
      .put(fetchProjectsPending())
      .provide(call.fn(gatewayApi.getProjects))
      .put(fetchProjectsSuccess(mockProjects))
      .silentRun();
  });

  it('should handle exceptions', () => {
    const error = new RequestError('Error fetching the projects!');

    return expectSaga(fetchProjects)
      .put(fetchProjectsPending())
      .provide([[call.fn(gatewayApi.getProjects), throwError(error)]])
      .put(fetchProjectsFailure(error))
      .silentRun();
  });
});
