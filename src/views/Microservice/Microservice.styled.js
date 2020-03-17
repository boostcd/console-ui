import styled from 'styled-components';

export const Detail = styled.div`
  display: flex;
  height: 3rem;
  line-height: 3rem;
`;

export const DetailTitle = styled.div`
  flex: 1;
  font-weight: bold;
`;

export const DetailValue = styled.div`
  flex: 1;
`;

export const Wrapper = styled.div`
  ${Detail} ~ ${Detail} {
    border-top: 1px solid #eee;
  }
`;
