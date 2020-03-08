import React from 'react';

import * as Styles from './Loader.styled';

class Loader extends React.PureComponent {
  render() {
    return (
      <Styles.Wrapper>
        <Styles.Spinner />
      </Styles.Wrapper>
    );
  }
}

export default Loader;
