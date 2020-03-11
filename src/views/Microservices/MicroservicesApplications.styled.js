import styled from 'styled-components';

import SyncIcon from '../../components/SyncIcon';

export const Wrapper = styled.div`
  padding-bottom: 0.5rem; // Keep the card shadow
`;

export const StateIcon = styled(SyncIcon)`
  color: inherit;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0 0.1rem 0.2rem;
`;
