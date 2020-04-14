import styled from 'styled-components';

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.2rem;
`;

export const CheckboxLabel = styled.label`
  margin-left: 0.5rem;
  vertical-align: middle;
`;

export const InputError = styled.div`
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.1rem;
`;

export const InputGroup = styled.div``;

export const Wrapper = styled.div`
  ${InputGroup} ~ ${InputGroup} {
    margin-top: 1rem;
  }
`;
