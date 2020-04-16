import styled from 'styled-components';
import { ifProp } from 'styled-tools';

export default styled.input.attrs({ type: 'text' })`
  width: 100%;
  font-size: 0.9rem;
  outline: none;
  background: white;
  height: 2rem;
  line-height: 2rem;
  padding: 0 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 3px;

  &::placeholder {
    color: #c8c8c8;
    font-size: 0.9rem;
  }

  &:read-only {
    color: #495057;
    background: #e9ecef;
    border-color: #ced4da;
  }

  ${ifProp('hasError', 'border-color: #dc3545;')};
`;
