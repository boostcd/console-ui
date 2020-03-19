import { includes } from 'ignore-case';
import { createSelector } from 'reselect';

export const getFeaturesDataSelector = (state) => state.features.data;
export const getFeaturesSearchSelector = (state) => state.features.search;

export const getFeaturesSelector = createSelector(
  getFeaturesDataSelector,
  getFeaturesSearchSelector,
  (data, search) => {
    if (!search) return data;

    const trimmedSearch = search.trim();

    // Partial match by the title
    return data.map((environment) => {
      if (!environment.features) return environment;

      return {
        ...environment,
        features: environment.features.filter((feature) => includes(feature.title, trimmedSearch)),
      };
    });
  }
);
