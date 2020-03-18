import { includes } from 'ignore-case';
import { createSelector } from 'reselect';

export const getMicroservicesDataSelector = (state) => state.microservices.data;
export const getMicroservicesSearchSelector = (state) => state.microservices.search;

export const getMicroservicesSelector = createSelector(
  getMicroservicesDataSelector,
  getMicroservicesSearchSelector,
  (data, search) => {
    if (!search) return data;

    const trimmedSearch = search.trim();

    // Partial match by the name/displayName
    return data.map((environment) => ({
      ...environment,
      apps: environment.apps.filter(
        (app) => includes(app.name, trimmedSearch) || includes(app.displayName, trimmedSearch)
      ),
    }));
  }
);
