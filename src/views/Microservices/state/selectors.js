import { createSelector } from 'reselect';

import includesIgnoreCase from '../../../utils/includesIgnoreCase';

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
            includesIgnoreCase(app.name, trimmedSearchQuery) ||
            includesIgnoreCase(app.displayName, trimmedSearchQuery)
        ),
      };
    });
  }
);
