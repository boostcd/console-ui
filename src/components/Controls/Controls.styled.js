import styled from 'styled-components';

import Button from '../Button';
import ExclamationIcon from '../ExclamationIcon';
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

export const ErrorIcon = styled(ExclamationIcon)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
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
