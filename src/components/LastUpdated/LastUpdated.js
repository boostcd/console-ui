import PropTypes from 'prop-types';
import React from 'react';

import t from '../../utils/translate';
import * as Styles from './LastUpdated.styled';

class LastUpdated extends React.PureComponent {
  render() {
    const { date, loading } = this.props;

    return (
      <Styles.Wrapper>
        {loading && <Styles.Spinner />}
        <span>{t('common.lastUpdated', { value: date.toLocaleString() })}</span>
      </Styles.Wrapper>
    );
  }
}

LastUpdated.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LastUpdated;
