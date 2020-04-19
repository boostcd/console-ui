### Environment variables

_Environment variables marked with \* are mandatory._

#### Project specific

- `PRODUCT`\*
- `PRODUCT_DESCRIPTION`\*
- `GATEWAY_API_SERVICE_URI`\*
- `TASK_MANAGEMENT_TITLE`\*

#### Setup/testing

- `PORT` - Configure a different port for the application to run; Defaults to `8080`
- `BUNDLE_ANALYZE` - Used to build the project and analyze the generated bundle (`yarn build:analyze`)

#### OpenShift specific (build process)

- `YARN_ENABLED`\* - Enables yarn as a package manager instead of npm
- `YARN_ARGS`\* - Arguments to pass to the `yarn install` command
- `POST_INSTALL`\* - Enables the `postinstall` script to run a build after installing the dependencies

You can use environment variables locally by [creating a .env file](https://github.com/jaredpalmer/razzle#adding-environment-variables-in-env) inside the root folder. This should be used for development purposes only as .env files are git-ignored anyway.
