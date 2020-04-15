import { Sync } from '@styled-icons/fa-solid';
import styled from 'styled-components';

import rotate from '../../styles/keyframes/rotate';

export default styled(Sync)`
  color: white;
  vertical-align: middle;
  animation: ${rotate} 2s infinite linear;
`;
