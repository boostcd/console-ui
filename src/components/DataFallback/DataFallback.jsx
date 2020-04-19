import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './DataFallback.styled';

class DataFallback extends React.PureComponent {
  render() {
    const { title } = this.props;

    return (
      <Styles.Wrapper>
        <Styles.Title>{title}</Styles.Title>
      </Styles.Wrapper>
    );
  }
}

DataFallback.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DataFallback;
