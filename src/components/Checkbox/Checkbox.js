import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './Checkbox.styled';

class Checkbox extends React.PureComponent {
  render() {
    const { id, name, checked, onChange, readyOnly } = this.props;

    return (
      <Styles.CheckboxContainer>
        <Styles.HiddenCheckbox
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={readyOnly}
        />
        <Styles.Checkbox checked={checked}>
          <Styles.CheckboxIcon />
        </Styles.Checkbox>
      </Styles.CheckboxContainer>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  readyOnly: PropTypes.bool,
};

Checkbox.defaultProps = {
  readyOnly: false,
};

export default Checkbox;
