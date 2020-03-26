import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import resets from './resets';
import scrollbar from './scrollbar';

export default createGlobalStyle`
  ${normalize};
  ${resets};
  ${scrollbar};
`;
