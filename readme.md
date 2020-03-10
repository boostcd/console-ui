# estafet-openshift-boost-console-ui-react

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
* **test** - Run the unit test suite using [Jest](https://jestjs.io/)

### Running locally

Please configure the following environment variables in order to run the project locally:

```bash
PRODUCT=...
PRODUCT_DESCRIPTION=...
GATEWAY_API_SERVICE_URI=...
```

Use the following command to start the project in development mode:

```bash
npm run start:dev
OR
yarn start:dev
```

The application will start at [localhost:3000](http://localhost:3000). You can change to a desired port by defining a **PORT** environment variable.

### Technology

[razzle](https://github.com/jaredpalmer/razzle)

[React](https://reactjs.org/)

[Redux](https://react-redux.js.org/)

[Redux-saga](https://redux-saga.js.org/)

[styled-components](https://styled-components.com/)

[@loadable/server, @loadable/component](https://loadable-components.com/)

..and much more 🤫

### Linting and code formatting

Linting and code formatting is done by using [ESLint](https://eslint.org/) and [prettier](https://prettier.io/). [Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) are configured using [husky](https://www.npmjs.com/package/husky) and [lint-staged](https://www.npmjs.com/package/lint-staged) in order to prevent bad coding practices by linting and pre-formatting the code on every commit.

*To be extended in the future with more documentation on how the application is working*
