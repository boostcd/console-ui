import styled, { css } from 'styled-components';

import { baseColor } from '../../styles/variables/colors';

const commonStyles = css`
  height: 0.7rem;
  border-radius: 3px;
`;

export const Wrapper = styled.div`
  ${commonStyles};
  background: #f5f5f5;
`;

export const Bar = styled.div`
  ${commonStyles};
  width: 0%;
  background: ${baseColor};
  transition: width 200ms ease-in-out;
`;
