import PropTypes from 'prop-types';

import usersType from './users';

export default PropTypes.arrayOf(PropTypes.shape(usersType));
