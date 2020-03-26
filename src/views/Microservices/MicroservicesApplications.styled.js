import styled from 'styled-components';

import SyncIcon from '../../components/SyncIcon/SyncIcon';

export const Wrapper = styled.div`
  /* Keep the card shadow */
  padding-bottom: 0.5rem;
`;

export const StateIcon = styled(SyncIcon)`
  color: inherit;
  width: 0.75rem;
  margin: 0 0 0.15rem 0.3rem;
`;
