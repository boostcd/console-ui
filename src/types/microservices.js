import PropTypes from 'prop-types';

import environmentType from './environment';
import microserviceType from './microservice';

export default PropTypes.arrayOf(
  PropTypes.shape({
    ...environmentType,
    apps: PropTypes.arrayOf(PropTypes.shape(microserviceType)).isRequired,
  })
);
