import { includes } from 'ignore-case';
import { createSelector } from 'reselect';

const getFeaturesDataSelector = (state) => state.features.data;
const getFeaturesSearchQuerySelector = (state) => state.features.searchQuery;

export const getFeaturesSelector = createSelector(
  getFeaturesDataSelector,
  getFeaturesSearchQuerySelector,
  (data, searchQuery) => {
    if (!searchQuery) return data;

    const trimmedSearchQuery = searchQuery.trim();

    // Partial match by the title
    return data.map((environment) => {
      if (!environment.features) return environment;

      return {
        ...environment,
        features: environment.features.filter((feature) =>
          includes(feature.title, trimmedSearchQuery)
        ),
      };
    });
  }
);
