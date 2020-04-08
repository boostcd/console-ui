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
    release: 'Release',
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
  environments: {
    pageTitle: 'Environments',
    dataFallback: 'No environments available!',
    actions: {
      add: 'Add environment',
      delete: {
        confirm: 'Are you sure you want to delete environment - {{namespace}}?',
        pending: 'Deleting environment {{namespace}}...',
        success: 'Environment {{namespace}} is marked for deletion!',
      },
    },
    tableColumns: {
      title: 'Title',
      owner: 'Owner',
      namespace: 'Namespace',
      actions: 'Actions',
    },
    terminating: 'Environment was marked for deletion!',
  },
  environment: {
    actions: {
      backToList: 'Back to list',
    },
    form: {
      title: 'Title:',
      owner: 'Owner:',
      namespace: 'Namespace:',
      errors: {
        title: 'Please enter a environment title!',
        owner: 'Please select a environment owner!',
      },
    },
    add: {
      pageTitle: 'Add environment',
      successMessage: 'Successfully added a new environment!',
    },
    edit: {
      pageTitle: 'Edit environment: {{namespace}}',
      successMessage: 'Successfully edited a environment!',
    },
  },
  libraries: {
    pageTitle: 'Libraries',
    dataFallback: 'No libraries available!',
    actions: {
      release: {
        confirm: 'Are you sure you want to release library - {{name}}?',
        pending: 'Releasing library {{name}}...',
        success: 'Library {{name}} is released!',
      },
    },
    tableColumns: {
      name: 'Name',
      actions: 'Actions',
    },
  },
};
