import { ExclamationCircle } from '@styled-icons/fa-solid';
import styled from 'styled-components';

export const TableActions = styled.div`
  > * {
    margin-left: 2px;
  }
`;

export const TerminatingIcon = styled(ExclamationCircle)`
  color: orange;
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
`;
