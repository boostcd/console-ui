import PropTypes from 'prop-types';

import { actionsType, stateType } from './common';

export default {
  name: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  deployed: PropTypes.bool.isRequired,
  deployedDate: PropTypes.string.isRequired,
  // Optional
  displayName: PropTypes.string,
  tested: PropTypes.bool,
  actions: PropTypes.shape(actionsType),
  state: PropTypes.shape(stateType),
};
