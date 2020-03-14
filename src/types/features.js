import PropTypes from 'prop-types';

import environmentType from './environment';
import featureType from './feature';

export default PropTypes.arrayOf(
  PropTypes.shape({
    ...environmentType,
    features: PropTypes.arrayOf(PropTypes.shape(featureType)).isRequired,
  })
);
