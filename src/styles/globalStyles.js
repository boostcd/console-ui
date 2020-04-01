import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import scrollbar from './other/scrollbar';
import resets from './resets';

export default createGlobalStyle`
  ${normalize};
  ${resets};
  ${scrollbar};
`;
