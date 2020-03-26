import {
  fetchMicroserviceFailure,
  fetchMicroservicePending,
  fetchMicroserviceSuccess,
} from './actions';
import reducer, { initialState } from './reducer';

describe('Microservice: state/reducer', () => {
  it('should have an initial state', () => {
    expect(reducer()).toEqual(initialState);
  });

  it('should handle unknown actions', () => {
    const unknownAction = {
      type: 'SOME_TYPE',
    };

    expect(reducer(undefined, unknownAction)).toEqual(initialState);
  });

  describe('PENDING', () => {
    it('should handle the action', () => {
      const state = {
        ...initialState,
        error: true,
        loading: false,
      };

      const action = fetchMicroservicePending();

      expect(reducer(state, action)).toEqual({
        ...initialState,
        error: false,
        loading: true,
      });
    });
  });

  describe('SUCCESS', () => {
    it('should handle the action', () => {
      const state = {
        ...initialState,
        error: true,
        loading: true,
      };

      const data = [{ foo: 'bar' }];
      const action = fetchMicroserviceSuccess(data);

      expect(reducer(state, action)).toEqual({
        ...initialState,
        data,
        error: false,
        loading: false,
      });
    });
  });

  describe('FAILURE', () => {
    it('should handle the action', () => {
      const state = {
        ...initialState,
        error: false,
        loading: true,
      };

      const action = fetchMicroserviceFailure();

      expect(reducer(state, action)).toEqual({
        ...initialState,
        error: true,
        loading: false,
      });
    });
  });
});
