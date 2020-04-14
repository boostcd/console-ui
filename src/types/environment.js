import PropTypes from 'prop-types';

import ENVIRONMENT_STATUS from '../constants/environmentStatus';

export default {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  namespace: PropTypes.string.isRequired,
  test: PropTypes.bool.isRequired,
  status: PropTypes.oneOf([ENVIRONMENT_STATUS.ACTIVE, ENVIRONMENT_STATUS.TERMINATING]).isRequired,
  // apps: PropTypes.arrayOf(PropTypes.string),
};
