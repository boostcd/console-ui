import { CheckCircle, Circle, ExclamationCircle } from '@styled-icons/fa-solid';
import styled, { css } from 'styled-components';
import { ifProp, prop } from 'styled-tools';

import blink from '../../styles/keyframes/blink';
import Button from '../Button';
import SyncIcon from '../SyncIcon';

export const Wrapper = styled.div`
  ${Button} ~ ${Button} {
    margin-left: 4px;
  }
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
`;

export const Actions = styled.div`
  margin-top: 0.5rem;
`;

export const Indicator = styled(Circle)`
  width: 0.7rem;
  height: 0.7rem;
  color: ${prop('colour', '#484848')};
  margin-right: 0.5rem;

  ${ifProp(
    'isActive',
    css`
      animation: ${blink(prop('colour', '#484848'))} 1s infinite;
    `
  )};
`;

const testIconStyles = css`
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
`;

export const TestsSuccessful = styled(CheckCircle)`
  ${testIconStyles};
  color: green;
`;

export const TestsFailed = styled(ExclamationCircle)`
  ${testIconStyles};
  color: red;
`;

export const StateIcon = styled(SyncIcon)`
  color: inherit;
  width: 0.6rem;
  height: 0.6rem;
  margin: 0 0 0.1rem 0.3rem;
`;

export const NoActions = styled.span`
  font-size: 0.7rem;
`;
