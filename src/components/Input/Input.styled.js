import styled from 'styled-components';

export const Wrapper = styled.input`
  font-size: 0.8rem;
  outline: none;
  background: white;
  height: 2rem;
  line-height: 2rem;
  padding: 0 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;

  &::placeholder {
    color: #c8c8c8;
    font-size: 0.75rem;
  }
`;
