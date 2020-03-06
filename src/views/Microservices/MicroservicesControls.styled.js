import { Circle as CircleIcon, ExclamationCircle } from '@styled-icons/fa-solid';
import styled, { css, keyframes } from 'styled-components';

import Button from '../../components/Button';

const iconStyles = css`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const blinkColor = (color) => keyframes`
  25% {
    color: ${color};
  }

  50% {
    color: transparent;
  }

  75% {
    color: ${color};
  }
`;

export const Wrapper = styled.div`
  ${Button} ~ ${Button} {
    margin-left: 4px;
  }
`;

export const StageTitle = styled.h3``;

export const StageActions = styled.div`
  margin-top: 0.5rem;
`;

export const Circle = styled(CircleIcon)`
  ${iconStyles};
`;

export const TestCircle = styled(ExclamationCircle)`
  ${iconStyles};
  color: red;
`;

export const StagingCircle = styled(Circle)`
  color: blue;
  animation: ${blinkColor('blue')} 3s infinite;
`;

export const LiveCircle = styled(Circle)`
  color: green;
  animation: ${blinkColor('green')} 3s infinite;
`;
