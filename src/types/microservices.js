import PropTypes from 'prop-types';

const actions = {
  build: PropTypes.bool,
  test: PropTypes.bool,
  promote: PropTypes.bool,
  goLive: PropTypes.bool,
  backOut: PropTypes.bool,
};

export const serviceType = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  deployed: PropTypes.bool.isRequired,
  deployedDate: PropTypes.string.isRequired,
  // tested: PropTypes.bool,
  actions: PropTypes.shape(actions),
};

export const environmentType = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  updatedDate: PropTypes.string.isRequired,
  actions: actions.isRequired,
  apps: PropTypes.arrayOf(PropTypes.shape(serviceType)).isRequired,
};
