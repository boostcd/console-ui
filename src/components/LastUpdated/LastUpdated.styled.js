import { CircleNotch } from '@styled-icons/fa-solid';
import styled from 'styled-components';

import rotate from '../../styles/keyframes/rotate';

export const Wrapper = styled.div`
  color: #666;
  font-size: 0.7rem;
`;

export const Spinner = styled(CircleNotch)`
  width: 0.7rem;
  height: 0.7rem;
  margin-right: 0.2rem;
  animation: ${rotate} 1s infinite linear;
`;
