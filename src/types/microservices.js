import PropTypes from 'prop-types';

import { actionsType, environmentType, stateType } from './common';

export const microserviceType = {
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

const microservicesEnvironmentType = {
  ...environmentType,
  apps: PropTypes.arrayOf(PropTypes.shape(microserviceType)).isRequired,
};

export default PropTypes.arrayOf(PropTypes.shape(microservicesEnvironmentType));
