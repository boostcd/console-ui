import React from 'react';

import * as Styles from './Loader.styled';

class Loader extends React.PureComponent {
  render() {
    return (
      <Styles.Wrapper>
        <Styles.SpinnerIcon />
      </Styles.Wrapper>
    );
  }
}

export default Loader;
