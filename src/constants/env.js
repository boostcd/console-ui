// https://www.npmjs.com/package/exenv
const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

/**
 * TODO: Using this file in order to use the environment variables both on client and server-side
 * This should be treated as a temporary solution to the fact we can't load variables during build
 * The current setup in OpenShift doesn't allow dynamic environment variables
 * Remove this in the future in favor of loading using webpack.DefinePlugin or webpack.EnvironmentPlugin
 */
export const PRODUCT = canUseDOM ? window.__GLOBALS__.PRODUCT : process.env.PRODUCT;

export const PRODUCT_DESCRIPTION = canUseDOM
  ? window.__GLOBALS__.PRODUCT_DESCRIPTION
  : process.env.PRODUCT_DESCRIPTION;

export const TASK_MANAGEMENT_TITLE = canUseDOM
  ? window.__GLOBALS__.TASK_MANAGEMENT_TITLE
  : process.env.TASK_MANAGEMENT_TITLE;

export const GATEWAY_API_SERVICE_URI = canUseDOM
  ? window.__GLOBALS__.GATEWAY_API_SERVICE_URI
  : process.env.GATEWAY_API_SERVICE_URI;
