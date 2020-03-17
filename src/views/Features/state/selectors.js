import { createSelector } from 'reselect';

export const getFeaturesDataSelector = (state) => state.features.data;
export const getFeaturesSearchSelector = (state) => state.features.search;

export const getFeaturesSelector = createSelector(
  getFeaturesDataSelector,
  getFeaturesSearchSelector,
  (data, search) => {
    if (!search) return data;
    const trimmedSearch = search.trim();

    // Partial match by the name/displayName
    return data.map((environment) => ({
      ...environment,
      features: environment.features.filter(
        (app) =>
          (app.name && !app.name.indexOf(trimmedSearch)) ||
          (app.displayName && !app.displayName.indexOf(trimmedSearch))
      ),
    }));
  }
);
