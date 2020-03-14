import PropTypes from 'prop-types';
import React from 'react';
import { format } from 'timeago.js';

import microserviceType from '../../types/microservice';
import t from '../../utils/translate';
import * as Styles from './MicroserviceCard.styled';

class MicroserviceCard extends React.PureComponent {
  render() {
    const {
      name: nameProp,
      displayName,
      version,
      deployed,
      deployedDate,
      state = {},
      actions = {},
    } = this.props;

    const name = displayName || nameProp;
    const isActive = !!Object.values(state).filter(Boolean).length;
    const showDeployed = deployed || (isActive && deployedDate !== undefined);

    const deployedText = showDeployed
      ? t('common.deployed', { value: format(deployedDate) })
      : t('common.notDeployed');

    const deployedTextAlt = showDeployed ? deployedDate : undefined;
    const hasError = !deployed && !isActive;

    return (
      <Styles.Wrapper>
        <Styles.Name title={nameProp}>
          {hasError && <Styles.ErrorIcon />}
          <span>{name}</span>
        </Styles.Name>
        <Styles.Version>{version}</Styles.Version>
        <Styles.Date title={deployedTextAlt}>{deployedText}</Styles.Date>
        <Styles.Actions>{actions}</Styles.Actions>
      </Styles.Wrapper>
    );
  }
}

MicroserviceCard.propTypes = {
  ...microserviceType,
  actions: PropTypes.node.isRequired,
};

export default MicroserviceCard;
