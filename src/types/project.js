import PropTypes from 'prop-types';

import PROJECT_STATUS from '../constants/projectStatus';

export default {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  namespace: PropTypes.string.isRequired,
  status: PropTypes.oneOf([PROJECT_STATUS.ACTIVE, PROJECT_STATUS.TERMINATING]),
  // apps: PropTypes.arrayOf(PropTypes.string),
};
