import { CheckCircle, ExclamationCircle } from '@styled-icons/fa-solid';
import styled, { css } from 'styled-components';

import Button from '../Button';
import SyncIcon from '../SyncIcon';

export const Wrapper = styled.div`
  ${Button} ~ ${Button} {
    margin-left: 4px;
  }
`;

export const Title = styled.h3``;

export const Actions = styled.div`
  margin-top: 0.5rem;
`;

const testIconStyles = css`
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
  vertical-align: middle;
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
