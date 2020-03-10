import PropTypes from 'prop-types';

const actions = PropTypes.shape({
  build: PropTypes.bool,
  test: PropTypes.bool,
  promote: PropTypes.bool,
  goLive: PropTypes.bool,
  backOut: PropTypes.bool,
});

export const serviceType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  deployed: PropTypes.bool.isRequired,
  deployedDate: PropTypes.string,
  displayName: PropTypes.string,
  actions: actions.isRequired,
});

export const environmentType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  updatedDate: PropTypes.string.isRequired,
  actions: actions.isRequired,
  apps: PropTypes.arrayOf(serviceType).isRequired,
});
