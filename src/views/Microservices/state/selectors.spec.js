import { getMicroservicesSelector } from './selectors';

describe('Microservices: state/selectors', () => {
  const createState = (payload) => ({
    microservices: {
      ...payload,
    },
  });

  describe('getMicroservicesSelector', () => {
    const data = [
      {
        apps: [{ name: 'some-app' }, { name: 'another-test-app' }],
      },
      {
        apps: [{ name: 'test-app', displayName: 'Testing app' }, { name: 'just-an-app' }],
      },
    ];

    it('should return the data when the query is empty', () => {
      const state = createState({
        data,
        searchQuery: undefined,
      });

      expect(getMicroservicesSelector(state)).toEqual(data);
    });

    it('should not return any items when the query is not matching', () => {
      const state = createState({
        data,
        searchQuery: 'not matching',
      });

      const expectedData = [{ apps: [] }, { apps: [] }];

      expect(getMicroservicesSelector(state)).toEqual(expectedData);
    });

    it('should return the matched items and ignore the casing', () => {
      const state = createState({
        data,
        searchQuery: 'TEST',
      });

      const expectedData = [
        {
          apps: [{ name: 'another-test-app' }],
        },
        {
          apps: [{ name: 'test-app', displayName: 'Testing app' }],
        },
      ];

      expect(getMicroservicesSelector(state)).toEqual(expectedData);
    });

    it('should return the matched items and trim the query', () => {
      const state = createState({
        data,
        searchQuery: ' just ',
      });

      const expectedData = [
        {
          apps: [],
        },
        {
          apps: [{ name: 'just-an-app' }],
        },
      ];

      expect(getMicroservicesSelector(state)).toEqual(expectedData);
    });

    it('should return the matched items using the displayName as well', () => {
      const state = createState({
        data,
        searchQuery: 'Testing',
      });

      const expectedData = [
        {
          apps: [],
        },
        {
          apps: [{ name: 'test-app', displayName: 'Testing app' }],
        },
      ];

      expect(getMicroservicesSelector(state)).toEqual(expectedData);
    });
  });
});
