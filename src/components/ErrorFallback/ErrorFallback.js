import React from 'react';

import * as Styles from './ErrorFallback.styled';

class ErrorFallback extends React.PureComponent {
  render() {
    return (
      <Styles.Wrapper>
        <Styles.Title>Something went wrong!</Styles.Title>
      </Styles.Wrapper>
    );
  }
}

export default ErrorFallback;
