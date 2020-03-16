import { keyframes } from 'styled-components';

export default (colour) => keyframes`
  0% {
    color: ${colour};
  }

  50% {
    color: transparent;
  }

  100% {
    color: ${colour};
  }
`;
