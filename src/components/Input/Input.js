import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './Input.styled';

class Input extends React.PureComponent {
  render() {
    const { value, placeholder, onChange } = this.props;

    return (
      <Styles.Wrapper type='text' value={value} placeholder={placeholder} onChange={onChange} />
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
