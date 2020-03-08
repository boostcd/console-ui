import PropTypes from 'prop-types';
import React from 'react';
import { format } from 'timeago.js';

import * as Styles from './Card.styled';

class Card extends React.PureComponent {
  render() {
    const { app, hasError, actions } = this.props;
    const { name, version, deployed, deployedDate } = app;

    const deployedText = deployed ? `Deployed ${format(deployedDate)}` : 'Not deployed';

    return (
      <Styles.Wrapper>
        <Styles.Name title={name}>
          {hasError && <Styles.ExclamationCircle />}
          <span>{name}</span>
        </Styles.Name>
        <Styles.Version>{version}</Styles.Version>
        <Styles.Date title={app.deployedDate}>{deployedText}</Styles.Date>
        <Styles.Actions>{actions}</Styles.Actions>
      </Styles.Wrapper>
    );
  }
}

Card.propTypes = {
  app: PropTypes.shape({
    name: PropTypes.string,
    version: PropTypes.string,
    deployed: PropTypes.bool,
    deployedDate: PropTypes.string,
  }).isRequired,
  hasError: PropTypes.bool.isRequired,
  actions: PropTypes.node.isRequired,
};

export default Card;
