import { CircleNotch } from '@styled-icons/fa-solid';
import styled from 'styled-components';

import rotate from '../../styles/keyframes/rotate';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SpinnerIcon = styled(CircleNotch)`
  color: #888;
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: 2rem auto 0;
  animation: ${rotate} 1s infinite linear;
`;
