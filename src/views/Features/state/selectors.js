import { createSelector } from 'reselect';

export const getFeaturesDataSelector = (state) => state.features.data;
export const getFeaturesSearchSelector = (state) => state.features.search;

export const getFeaturesSelector = createSelector(
  getFeaturesDataSelector,
  getFeaturesSearchSelector,
  (data, search) => {
    if (!search) return data;

    const trimmedSearch = search.trim();

    // Partial match by the title/description
    return data.map((environment) => ({
      ...environment,
      features: environment.features.filter(
        (feature) =>
          (feature.title && !feature.title.indexOf(trimmedSearch)) ||
          (feature.description && !feature.description.indexOf(trimmedSearch))
      ),
    }));
  }
);
