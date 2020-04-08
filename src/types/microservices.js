import PropTypes from 'prop-types';

import microserviceType from './microservice';
import stageType from './stage';

export default PropTypes.arrayOf(
  PropTypes.shape({
    ...stageType,
    apps: PropTypes.arrayOf(PropTypes.shape(microserviceType)).isRequired,
  })
);
