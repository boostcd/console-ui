import { getFeaturesSelector } from './selectors';

describe('Features: state/selectors', () => {
  const createState = (payload) => ({
    features: {
      ...payload,
    },
  });

  describe('getFeaturesSelector', () => {
    const data = [
      {
        features: [{ title: 'Trello feature' }, { title: 'Jira feature' }],
      },
      {
        features: [{ title: 'Example feature' }, { title: 'Another trello feature' }],
      },
    ];

    it('should return the data when the query is empty', () => {
      const state = createState({
        data,
        searchQuery: undefined,
      });

      expect(getFeaturesSelector(state)).toEqual(data);
    });

    it('should not return any items when the query is not matching', () => {
      const state = createState({
        data,
        searchQuery: 'not matching',
      });

      const expectedData = [{ features: [] }, { features: [] }];

      expect(getFeaturesSelector(state)).toEqual(expectedData);
    });

    it('should return the matched items and ignore the casing', () => {
      const state = createState({
        data,
        searchQuery: 'Trello',
      });

      const expectedData = [
        {
          features: [{ title: 'Trello feature' }],
        },
        {
          features: [{ title: 'Another trello feature' }],
        },
      ];

      expect(getFeaturesSelector(state)).toEqual(expectedData);
    });

    it('should return the matched items and trim the query', () => {
      const state = createState({
        data,
        searchQuery: ' jira  ',
      });

      const expectedData = [
        {
          features: [{ title: 'Jira feature' }],
        },
        {
          features: [],
        },
      ];

      expect(getFeaturesSelector(state)).toEqual(expectedData);
    });
  });
});
