import PropTypes from 'prop-types';

import { actionsType, stateType } from './common';

export default {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  updatedDate: PropTypes.string.isRequired,
  actions: PropTypes.shape(actionsType).isRequired,
  state: PropTypes.shape(stateType).isRequired,
};
