import { Check } from '@styled-icons/fa-solid';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

export const CheckboxContainer = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

export const CheckboxIcon = styled(Check)`
  display: block;
  margin: auto;
  height: 100%;
  width: 0.8rem;
  color: grey;
`;

export const Checkbox = styled.div`
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  background: ${ifProp('checked', 'grey', 'white')};
  border-radius: 3px;
  border: 2px solid ${ifProp('checked', 'grey', '#ced4da')};
  transition: 150ms all;

  ${CheckboxIcon} {
    color: white;
    visibility: ${ifProp('checked', 'visible', 'hidden')};
  }
`;
