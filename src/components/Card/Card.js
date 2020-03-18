import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  border-radius: 3px;
  padding: 0.5rem;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  transition: background 200ms linear;

  ${ifProp(
    'isActive',
    css`
      background: #e5f4f7;
    `
  )};
`;
