import React from 'react';

import t from '../../utils/translate';
import * as Styles from './ErrorFallback.styled';

class ErrorFallback extends React.PureComponent {
  render() {
    return (
      <Styles.Wrapper>
        <Styles.Title>{t('common.errorFallback')}</Styles.Title>
      </Styles.Wrapper>
    );
  }
}

export default ErrorFallback;
