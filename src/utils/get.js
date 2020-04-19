import invariant from 'tiny-invariant';

/**
 * Utility used to get the value at path of an object
 * https://lodash.com/docs/4.17.15#get
 */
export default function get(obj, path, defaultValue) {
  invariant(obj, 'Missing argument: obj!');
  invariant(path, 'Missing argument: path!');

  const keys = Array.isArray(path) ? path : path.split('.');
  const [currKey] = keys;
  const nextObject = obj[currKey];

  if (nextObject && keys.length > 1) {
    return get(nextObject, keys.slice(1), defaultValue);
  }

  return nextObject || defaultValue;
}
