export default function includesIgnoreCase(value, includeValue) {
  if (!value || !includeValue) return false;

  return value.toUpperCase().indexOf(includeValue.toUpperCase()) !== -1;
}
