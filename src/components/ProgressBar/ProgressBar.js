import PropTypes from 'prop-types';
import React from 'react';

import * as Styles from './ProgressBar.styled';

class ProgressBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      isActive: props.isActive,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isActive === state.isActive) return null;

    return {
      value: props.isActive ? state.value : 0,
      isActive: props.isActive,
    };
  }

  componentDidMount() {
    this.initInterval();
  }

  componentDidUpdate() {
    this.initInterval();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  initInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    if (this.state.isActive) {
      this.interval = setInterval(this.updateValue, 2400);
    }
  }

  updateValue = () => {
    this.setState((state) => {
      if (state.value === 100) {
        clearInterval(this.interval);
        return null;
      }

      return {
        value: state.value + 1,
      };
    });
  };

  render() {
    const { value } = this.state;

    return (
      <Styles.Wrapper>
        <Styles.Bar style={{ width: `${value}%` }} />
      </Styles.Wrapper>
    );
  }
}

ProgressBar.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default ProgressBar;
