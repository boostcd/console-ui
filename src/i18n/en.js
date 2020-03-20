export default {
  common: {
    view: 'View',
    edit: 'Edit',
    delete: 'Delete',
    submit: 'Submit',
    reset: 'Reset',
    build: 'Build',
    buildAll: 'Build all',
    testAll: 'Run tests',
    promote: 'Promote',
    promoteAll: 'Promote all',
    goLive: 'Go live!',
    backOut: 'Back out!',
    name: 'Name',
    displayName: 'Display name',
    environment: 'Environment',
    version: 'Version',
    deployedDate: 'Deployed date',
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
    dataFallback: 'No projects available!',
    actions: {
      add: 'Add project',
    },
    tableColumns: {
      title: 'Title',
      owner: 'Owner',
      namespace: 'Namespace',
      actions: 'Actions',
    },
    deleteSuccess: 'Successfully deleted project with namespace {{namespace}}!',
  },
  project: {
    actions: {
      backToList: 'Back to list',
    },
    add: {
      pageTitle: 'Add project',
    },
    edit: {
      pageTitle: 'Edit project {{namespace}}',
    },
  },
};
