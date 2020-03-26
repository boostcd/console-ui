import ACTIONS, {
  fetchMicroservice,
  fetchMicroserviceFailure,
  fetchMicroservicePending,
  fetchMicroserviceSuccess,
} from './actions';

describe('Microservice: state/actions', () => {
  it('should create the FETCH action', () => {
    const environmentName = 'example-env';
    const appName = 'example-app';

    expect(fetchMicroservice(environmentName, appName)).toEqual({
      type: ACTIONS.FETCH,
      payload: {
        environmentName,
        appName,
      },
    });
  });

  it('should create the PENDING action', () => {
    expect(fetchMicroservicePending()).toEqual({
      type: ACTIONS.PENDING,
    });
  });

  it('should create the SUCCESS action', () => {
    const data = [{ foo: 'bar' }];

    expect(fetchMicroserviceSuccess(data)).toEqual({
      type: ACTIONS.SUCCESS,
      payload: {
        data,
      },
    });
  });

  it('should create the FAILURE action', () => {
    const error = 'Example error message!';

    expect(fetchMicroserviceFailure(error)).toEqual({
      type: ACTIONS.FAILURE,
      payload: {
        error,
      },
    });
  });
});
