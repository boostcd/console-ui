import styled, { css } from 'styled-components';
import { ifProp, switchProp, withProp } from 'styled-tools';

import { baseColor } from '../../styles/variables/colors';

export default styled.button`
  outline: none;
  cursor: pointer;
  border: 0;
  height: 1.8rem;
  line-height: 1.8rem;
  border-radius: 3px;
  font-size: 0.9rem;
  padding: 0 0.5rem;
  transition: 150ms all ease-in;
  color: ${switchProp('variant', {
    primary: 'white',
    secondary: baseColor,
  })};
  background: ${switchProp('variant', {
    primary: baseColor,
    secondary: 'transparent',
  })};
  border: ${withProp(
    switchProp('variant', {
      primary: 'transparent',
      secondary: baseColor,
    }),
    (color) => `1px solid ${color}`
  )};

  &:hover {
    color: white;
    background: ${switchProp('variant', {
      primary: '#138496',
      secondary: baseColor,
    })};
  }

  ${ifProp(
    'isDisabled',
    css`
      pointer-events: none;
      /*
      color: #bbbbbb;
      background: #dedede;
      border-color: #bbbbbb;
      */
    `
  )};
`;
