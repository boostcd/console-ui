import invariant from 'tiny-invariant';

import en from '../i18n/en';
import get from './get';

const placeholderRegex = /{{([^{}]*)}}/g;

/**
 * Temporary simple utility to be used as a i18n getter before implementing an actual service
 */
export default (key, params) => {
  invariant(key, 'Missing argument: key!');

  const str = get(en, key, `Missing translation for key: ${key}`);

  if (!params) return str;

  return str.replace(placeholderRegex, (_match, prop) => {
    const value = params[prop];

    if (typeof value === 'function') {
      return value(prop, params);
    }

    return value || '';
  });
};
