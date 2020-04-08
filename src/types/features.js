import PropTypes from 'prop-types';

import featureType from './feature';
import stageType from './stage';

export default PropTypes.arrayOf(
  PropTypes.shape({
    ...stageType,
    features: PropTypes.arrayOf(PropTypes.shape(featureType)).isRequired,
  })
);
