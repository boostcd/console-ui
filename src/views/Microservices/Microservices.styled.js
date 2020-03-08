import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 1000px;
  overflow-x: scroll;

  @media (min-width: 1000px) {
    min-width: auto;
    overflow-x: auto;
  }
`;
