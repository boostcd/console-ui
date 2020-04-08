import PropTypes from 'prop-types';

import { actionsType, stateType } from './common';

// This is only named stage because of the already over-complicated naming used for the application
export default {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  updatedDate: PropTypes.string.isRequired,
  actions: PropTypes.shape(actionsType).isRequired,
  state: PropTypes.shape(stateType).isRequired,
  tested: PropTypes.bool,
  indicatorColour: PropTypes.string,
};
