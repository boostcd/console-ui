import PropTypes from 'prop-types';
import React from 'react';
import { format } from 'timeago.js';

import { serviceType } from '../../types/microservices';
import * as Styles from './MicroserviceCard.styled';

class MicroserviceCard extends React.PureComponent {
  render() {
    const { name: nameProp, displayName, version, deployed, deployedDate, actions } = this.props;

    const name = displayName || nameProp;
    const deployedText = deployed ? `Deployed ${format(deployedDate)}` : 'Not deployed';
    const deployedTextAlt = deployed ? deployedDate : undefined;

    return (
      <Styles.Wrapper>
        <Styles.Name title={nameProp}>
          {!deployed && <Styles.ExclamationCircle />}
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
  ...serviceType,
  actions: PropTypes.node.isRequired,
};

export default MicroserviceCard;
