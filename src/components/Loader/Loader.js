import React from 'react';

import Spinner from '../Spinner';
import * as Styles from './Loader.styled';

class Loader extends React.PureComponent {
  render() {
    return (
      <Styles.Wrapper>
        <Spinner />
      </Styles.Wrapper>
    );
  }
}

export default Loader;
