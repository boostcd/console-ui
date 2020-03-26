import MockDate from '../../../utils/MockDate';
import {
  fetchProjectsFailure,
  fetchProjectsPending,
  fetchProjectsSuccess,
  startPollingProjects,
  stopPollingProjects,
} from './actions';
import reducer, { initialState } from './reducer';

describe('Projects: state/reducer', () => {
  it('should have an initial state', () => {
    expect(reducer()).toEqual(initialState);
  });

  it('should handle unknown actions', () => {
    const unknownAction = {
      type: 'SOME_TYPE',
    };

    expect(reducer(undefined, unknownAction)).toEqual(initialState);
  });

  describe('POLL_START', () => {
    it('should handle the action', () => {
      const action = startPollingProjects();

      expect(reducer(undefined, action)).toEqual({
        ...initialState,
        polling: {
          ...initialState.polling,
          enabled: true,
        },
      });
    });
  });

  describe('POLL_END', () => {
    it('should handle the action', () => {
      const state = {
        ...initialState,
        polling: {
          ...initialState.polling,
          enabled: true,
        },
      };

      const action = stopPollingProjects();

      expect(reducer(state, action)).toEqual({
        ...initialState,
        polling: {
          ...initialState.polling,
          enabled: false,
        },
      });
    });
  });

  describe('PENDING', () => {
    it('should handle the action', () => {
      const state = {
        ...initialState,
        error: true,
        loading: false,
      };

      const action = fetchProjectsPending();

      expect(reducer(state, action)).toEqual({
        ...initialState,
        error: false,
        loading: true,
      });
    });
  });

  describe('SUCCESS', () => {
    const RealDate = Date;

    beforeAll(() => {
      global.Date = MockDate;
    });

    afterAll(() => {
      global.Date = RealDate;
    });

    it('should handle the action', () => {
      const state = {
        ...initialState,
        error: true,
        loading: true,
        polling: {
          ...initialState.polling,
          count: 5,
          lastUpdated: new MockDate(),
        },
      };

      const data = [{ foo: 'bar' }];
      const action = fetchProjectsSuccess(data);

      expect(reducer(state, action)).toEqual({
        ...initialState,
        data,
        error: false,
        loading: false,
        polling: {
          ...initialState.polling,
          count: 6,
          lastUpdated: new MockDate(),
        },
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

      const action = fetchProjectsFailure();

      expect(reducer(state, action)).toEqual({
        ...initialState,
        error: true,
        loading: false,
      });
    });
  });
});
