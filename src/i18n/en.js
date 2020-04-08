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
    form: {
      title: 'Title:',
      owner: 'Owner:',
      namespace: 'Namespace:',
      errors: {
        title: 'Please enter a project title!',
        owner: 'Please select a project owner!',
      },
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
