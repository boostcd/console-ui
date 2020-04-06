# estafet-openshift-boost-console-ui-react

![Build](https://img.shields.io/github/workflow/status/Estafet-LTD/estafet-openshift-boost-console-ui-react/CI%20Workflow/master) ![Version](https://img.shields.io/github/package-json/v/Estafet-LTD/estafet-openshift-boost-console-ui-react) ![Pull requests](https://img.shields.io/github/issues-pr/Estafet-LTD/estafet-openshift-boost-console-ui-react) ![Issues](https://img.shields.io/github/issues/Estafet-LTD/estafet-openshift-boost-console-ui-react)




Front-end application for the Estafet Boost project build using React. More about requirements, technology stack and how to run in the sections bellow.

### Requirements

* [Node.js](https://nodejs.org/en/)
* Package manager ([npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/)), but preferably npm because it's used by OpenShift

Use the package manager to install the dependencies.

```bash
npm install
OR
yarn install
```

### Commands

* **build** - Bundle the application into the build folder
* **start** - Start the applications in production mode
* **start:dev** - Start the applications in development mode
* **test** - Runs the unit test suite using [Jest](https://jestjs.io/)
* **test:ci** - Runs the unit test suite in CI mode (verbose flag set and watch mode disabled)
* **analyze** - Build the project and analyze the bundle using a [Webpack plugin](https://www.npmjs.com/package/webpack-bundle-analyzer)
* **postinstall** - Used as a hook to build the application when deploying in OpenShift

### Running locally

Please configure the following environment variables in order to run the project locally:

```bash
PRODUCT=...
PRODUCT_DESCRIPTION=...
GATEWAY_API_SERVICE_URI=...
TASK_MANAGEMENT_TITLE=...
```

Use the following command to start the project in development mode:

```bash
npm run start:dev
OR
yarn start:dev
```

The application will start at [localhost:8080](http://localhost:8080) by default. You can change to a desired port by defining a **PORT** (process.env.PORT) environment variable by [creating a .env file](https://github.com/jaredpalmer/razzle#adding-environment-variables-in-env) inside the root folder. This should be used for development purposes only as the .env files are git-ignored anyway.

### Technology

[razzle](https://github.com/jaredpalmer/razzle)

[React](https://reactjs.org/)

[Redux](https://react-redux.js.org/)

[Redux-saga](https://redux-saga.js.org/)

[styled-components](https://styled-components.com/)

[@loadable/server, @loadable/component](https://loadable-components.com/)

..and much more 🤫

### GIT Workflow

Workflows are custom automated processes that you can set up in your repository to build, test, package, release, or deploy any project on GitHub. With workflows you can automate your software development life cycle with a wide range of tools and services.

[The current workflow](./.github/workflows/main.yml) is implemented to run on master or pull request pushes in order to verify that the project can still build and that the tests are passing with the applied changes.

[Read more about workflows](https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow)

### Testing

Testing is implemented by using [Jest](https://jestjs.io/) as a test runner, [Enzyme](https://enzymejs.github.io/enzyme/) for component testing and [redux-saga-test-plan](https://www.npmjs.com/package/redux-saga-test-plan) for saga testing. There is also a commit hook to run tests related to the applied changes.

*Note: Using [.silentRun()](https://github.com/jfairbank/redux-saga-test-plan/blob/master/docs/integration-testing/timeout.md#silencing-warnings) for the saga testing, because some of the sagas are using an infinite loop to achieve polling functionality*

### Linting and code formatting 🤨

Linting and code formatting is done by using [ESLint](https://eslint.org/) and [prettier](https://prettier.io/). [Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) are configured using [husky](https://www.npmjs.com/package/husky)🐕 and [lint-staged](https://www.npmjs.com/package/lint-staged) in order to prevent bad coding practices by linting and pre-formatting the code on every commit.

#### Commit message linting
Commit message are linted and certain rules are enforced by using [commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint). This is used in order to enforce better messages and descriptions for changes made to the codebase.

## To be implemented

[Future improvements and notes here](todo.md)

*To be extended in the future with more documentation on how the application is working*
