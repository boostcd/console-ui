import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 1000px;

  @media (min-width: 1000px) {
    min-width: auto;
    overflow-x: auto;
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 0 0.5rem;
`;
