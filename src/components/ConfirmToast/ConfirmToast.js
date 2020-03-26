import PropTypes from 'prop-types';
import React from 'react';

import t from '../../utils/translate';
import Button from '../Button/Button';
import * as Styles from './ConfirmToast.styled';

class ConfirmToast extends React.PureComponent {
  render() {
    const { children, onConfirm, onCancel } = this.props;

    return (
      <Styles.Wrapper>
        <div>{children}</div>
        <Styles.Buttons>
          <Button variant='primary' onClick={onConfirm}>
            {t('common.confirm')}
          </Button>
          <Button variant='secondary' onClick={onCancel}>
            {t('common.cancel')}
          </Button>
        </Styles.Buttons>
      </Styles.Wrapper>
    );
  }
}

ConfirmToast.propTypes = {
  children: PropTypes.node.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConfirmToast;
