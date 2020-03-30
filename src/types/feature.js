import PropTypes from 'prop-types';

import PROMOTE_STATUS from '../constants/promoteStatus';

export default {
  featureId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  promoteStatus: PropTypes.oneOf([PROMOTE_STATUS.PROMOTED, PROMOTE_STATUS.PARTIALLY_PROMOTED]),
  // Optional
  waitingSince: PropTypes.string,
  description: PropTypes.string,
};
