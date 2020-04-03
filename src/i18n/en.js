export default {
  test: {
    simple: 'Simple example without params',
    withParams: 'Example with params: {{firstValue}} {{secondValue}}',
  },
  common: {
    view: 'View',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel',
    submit: 'Submit',
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
    action: {
      pending: 'Starting {{action}}...',
      success: 'Successfully started {{action}}!',
    },
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
    dataFallback: 'Microservice data not available!',
    actions: {
      backToList: 'Back to list',
    },
  },
  projects: {
    pageTitle: 'Projects',
    dataFallback: 'No projects available!',
    actions: {
      add: 'Add project',
      delete: {
        confirm: 'Are you sure you want to delete project - {{namespace}}?',
        pending: 'Deleting project {{namespace}}...',
        success: 'Project {{namespace}} is marked for deletion!',
      },
    },
    tableColumns: {
      title: 'Title',
      owner: 'Owner',
      namespace: 'Namespace',
      actions: 'Actions',
    },
    terminating: 'Project was marked for deletion!',
  },
  project: {
    actions: {
      backToList: 'Back to list',
    },
    add: {
      pageTitle: 'Add project',
      successMessage: 'Successfully added a new project!',
    },
    edit: {
      pageTitle: 'Edit project: {{namespace}}',
      successMessage: 'Successfully edited a project!',
    },
  },
};
