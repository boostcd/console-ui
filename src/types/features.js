import PropTypes from 'prop-types';

import { environmentType } from './common';

export const featuresType = {
  featureId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  promoted: PropTypes.bool.isRequired,
  waitingSince: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  // Optional
  description: PropTypes.string,
};

const featuresEnvironmentType = {
  ...environmentType,
  features: PropTypes.arrayOf(PropTypes.shape(featuresType)).isRequired,
};

export default PropTypes.arrayOf(PropTypes.shape(featuresEnvironmentType));
