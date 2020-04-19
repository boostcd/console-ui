import PropTypes from 'prop-types';

import userType from './user';

export default PropTypes.arrayOf(PropTypes.shape(userType));
