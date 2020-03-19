import styled from 'styled-components';

export const Tr = styled.tr``;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  ${Tr} ~ ${Tr} {
    border-top: 1px solid #dee2e6;
  }
`;

export const TableHead = styled.thead`
  border-bottom: 2px solid #dee2e6;
`;

export const Th = styled.th`
  padding: 0.75rem;
  text-align: left;
`;

export const Td = styled.td`
  padding: 0.75rem;
`;
