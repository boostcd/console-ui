import { fetchLibrariesFailure, fetchLibrariesPending, fetchLibrariesSuccess } from './actions';
import reducer, { initialState } from './reducer';

describe('Libraries: state/reducer', () => {
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

      const action = fetchLibrariesPending();

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
      const action = fetchLibrariesSuccess(data);

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

      const action = fetchLibrariesFailure();

      expect(reducer(state, action)).toEqual({
        ...initialState,
        error: true,
        loading: false,
      });
    });
  });
});
