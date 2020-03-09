import PropTypes from 'prop-types';

export const serviceType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  deployed: PropTypes.bool.isRequired,
  deployedDate: PropTypes.string,
  displayName: PropTypes.string,
  canBuild: PropTypes.bool,
  canPromote: PropTypes.bool,
  canRelease: PropTypes.bool,
});

export const environmentType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  updatedDate: PropTypes.string.isRequired,
  apps: PropTypes.arrayOf(serviceType).isRequired,
  canBuild: PropTypes.bool,
  canPromote: PropTypes.bool,
  canRelease: PropTypes.bool,
  tested: PropTypes.bool,
  live: PropTypes.bool,
});
