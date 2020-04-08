import PropTypes from 'prop-types';

import ENVIRONMENT_STATUS from '../constants/environmentStatus';

export default {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  namespace: PropTypes.string.isRequired,
  status: PropTypes.oneOf([ENVIRONMENT_STATUS.ACTIVE, ENVIRONMENT_STATUS.TERMINATING]),
  // apps: PropTypes.arrayOf(PropTypes.string),
};
