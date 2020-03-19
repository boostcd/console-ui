export default {
  common: {
    name: 'Name',
    displayName: 'Display name',
    environment: 'Environment',
    version: 'Version',
    deployedDate: 'Deployed date',
    view: 'View',
    build: 'Build',
    buildAll: 'Build all',
    testAll: 'Run tests',
    promote: 'Promote',
    promoteAll: 'Promote all',
    goLive: 'Go live!',
    backOut: 'Back out!',
    deployed: 'Deployed {{value}}',
    notDeployed: 'Not deployed',
    lastUpdated: 'Last updated: {{value}}',
    testsFailed: 'Untested or tests failing',
    testsSuccessful: 'Tested successfully',
  },
  features: {
    pageTitle: 'Features',
    dataFallback: 'No features available!',
    searchPlaceholder: 'Search for features',
    status: 'Status: {{value}}',
    waitingSince: 'Waiting since: {{value}}',
  },
  microservices: {
    pageTitle: 'Microservices',
    dataFallback: 'No microservices available!',
    searchPlaceholder: 'Search for microservices',
  },
  microservice: {
    pageTitle: 'Microservice: {{service}}',
    actions: {
      backToList: 'Back to list',
    },
  },
  projects: {
    pageTitle: 'Projects',
    actions: {
      add: 'Add project',
    },
    tableColumns: {
      title: 'Title',
      owner: 'Owner',
      namespace: 'Namespace',
      actions: 'Actions',
    },
  },
};
