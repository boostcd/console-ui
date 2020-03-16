import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './PageHeading.styled';

class PageHeading extends React.PureComponent {
  render() {
    const { title, children } = this.props;

    return (
      <Styles.Wrapper>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Actions>{children}</Styles.Actions>
      </Styles.Wrapper>
    );
  }
}

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageHeading;
