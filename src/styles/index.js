import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import resets from './resets';

export default createGlobalStyle`
  ${normalize};
  ${resets};
`;
