import styled from 'styled-components';

import SyncIcon from '../../components/SyncIcon';

export const Wrapper = styled.div`
  padding-bottom: 0.5rem; // Keep the card shadow
`;

export const StateIcon = styled(SyncIcon)`
  color: inherit;
  width: 0.75rem;
  margin: 0 0 0.15rem 0.3rem;
`;
