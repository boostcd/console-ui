import React from 'react';
import { format } from 'timeago.js';

import PROMOTE_STATUS from '../../constants/promoteStatus';
import featureType from '../../types/feature';
import t from '../../utils/translate';
import * as Styles from './FeatureCard.styled';

class FeatureCard extends React.PureComponent {
  getIconByUrl(url) {
    if (url.indexOf('trello.com')) return <Styles.TrelloIcon />;
    if (url.indexOf('jira.com')) return <Styles.JiraIcon />;

    return <Styles.FeatureIcon />;
  }

  render() {
    const { featureId, title, status, url, promoteStatus, waitingSince } = this.props; //description

    const icon = this.getIconByUrl(url);
    const isPartiallyPromoted = promoteStatus === PROMOTE_STATUS.PARTIALLY_PROMOTED;

    return (
      <Styles.Wrapper promoteStatus={promoteStatus}>
        <Styles.IdSection>
          <span>{icon}</span>
          <Styles.Id>
            <span>{featureId}</span>
            {isPartiallyPromoted && <span> {t('features.partiallyPromoted')}</span>}
          </Styles.Id>
        </Styles.IdSection>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Status>{t('features.status', { value: status })}</Styles.Status>
        {waitingSince && (
          <Styles.WaitingSince>
            {t('features.waitingSince', { value: format(waitingSince) })}
          </Styles.WaitingSince>
        )}
      </Styles.Wrapper>
    );
  }
}

FeatureCard.propTypes = {
  ...featureType,
};

export default FeatureCard;
