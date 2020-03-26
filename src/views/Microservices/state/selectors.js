import { includes } from 'ignore-case';
import { createSelector } from 'reselect';

const getMicroservicesDataSelector = (state) => state.microservices.data;
const getMicroservicesSearchQuerySelector = (state) => state.microservices.searchQuery;

export const getMicroservicesSelector = createSelector(
  getMicroservicesDataSelector,
  getMicroservicesSearchQuerySelector,
  (data, searchQuery) => {
    if (!searchQuery) return data;

    const trimmedSearchQuery = searchQuery.trim();

    // Partial match by the name/displayName
    return data.map((environment) => {
      if (!environment.apps) return environment;

      return {
        ...environment,
        apps: environment.apps.filter(
          (app) =>
            includes(app.name, trimmedSearchQuery) || includes(app.displayName, trimmedSearchQuery)
        ),
      };
    });
  }
);
