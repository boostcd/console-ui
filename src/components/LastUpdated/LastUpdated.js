import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './LastUpdated.styled';

class LastUpdated extends React.PureComponent {
  render() {
    const { date } = this.props;

    return <Styles.Wrapper>Last updated: {date.toLocaleString()}</Styles.Wrapper>;
  }
}

LastUpdated.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default LastUpdated;
