import styled from 'styled-components';

import Spinner from '../Spinner';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  ${Spinner} {
    position: absolute;
    left: 0;
    right: 0;
    margin: 2rem auto 0;
  }
`;
