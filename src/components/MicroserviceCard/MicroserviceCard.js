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
      tested,
      state = {},
      actions = {},
    } = this.props;

    const name = displayName || nameProp;
    const isTestable = tested !== null && tested !== undefined;
    const isActive = Object.values(state).some(Boolean);
    const showDeployed = deployed || (isActive && deployedDate !== undefined);

    const deployedText = showDeployed
      ? t('common.deployed', { value: format(deployedDate) })
      : t('common.notDeployed');

    const deployedTextAlt = showDeployed ? deployedDate : undefined;

    return (
      <Styles.Wrapper isActive={isActive}>
        <Styles.Name title={nameProp}>
          <span>{name}</span>
          {isTestable && (
            <>
              {tested ? (
                <Styles.TestsSuccessfulIcon title={t('common.testsSuccessful')} />
              ) : (
                <Styles.TestsFailedIcon title={t('common.testsFailed')} />
              )}
            </>
          )}
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
