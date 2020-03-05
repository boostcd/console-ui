import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export default styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-right-color: #888;
  animation: ${rotate} 1s infinite linear;
`;
