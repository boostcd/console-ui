import styled from 'styled-components';
import { ifProp } from 'styled-tools';

export default styled.select`
  width: 100%;
  font-size: 0.9rem;
  outline: none;
  background: white;
  height: 2rem;
  line-height: 2rem;
  padding: 0 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 3px;

  /* Using pointer-events because read-only is not applicable to a select field */
  ${ifProp(
    'readOnly',
    `
      pointer-events: none;
      color: #495057;
      background: #e9ecef;
      border-color: #ced4da;
    `
  )};

  ${ifProp('hasError', `border-color: #dc3545;`)};
`;
