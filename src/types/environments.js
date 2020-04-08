import PropTypes from 'prop-types';

import environmentType from './environment';

export default PropTypes.arrayOf(PropTypes.shape(environmentType));
