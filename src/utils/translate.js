import get from 'lodash.get';

import en from '../i18n/en';

const placeholderRegex = /{{([^{}]*)}}/g;

export default (key, params) => {
  const str = get(en, key, `Missing translation: ${key}`);

  if (!params) return str;

  return str.replace(placeholderRegex, (_match, prop) => {
    const value = params[prop];

    if (typeof value === 'function') {
      return value(prop, params);
    }

    return value || '';
  });
};
