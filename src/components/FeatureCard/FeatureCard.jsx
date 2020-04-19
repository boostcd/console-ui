import React from 'react';
import { format } from 'timeago.js';

import PROMOTE_STATUS from '../../constants/promoteStatus';
import featureType from '../../types/feature';
import t from '../../utils/translate';
import * as Styles from './FeatureCard.styled';

class FeatureCard extends React.PureComponent {
  static getIconByUrl(url) {
    /**
     * Note that the displayed feature icon is using the URL
     * because there is no type field present in the payload
     */
    if (url.indexOf('trello.com') !== -1) return <Styles.TrelloIcon />;
    if (url.indexOf('atlassian.net') !== -1) return <Styles.JiraIcon />;

    return <Styles.FeatureIcon />;
  }

  render() {
    const { featureId, title, status, url, promoteStatus, waitingSince } = this.props;

    const icon = FeatureCard.getIconByUrl(url);
    const isNotPromoted = promoteStatus === PROMOTE_STATUS.NOT_PROMOTED;
    const isPartiallyPromoted = promoteStatus === PROMOTE_STATUS.PARTIALLY_PROMOTED;

    return (
      <Styles.Wrapper isNotPromoted={isNotPromoted}>
        <Styles.Heading>
          <Styles.IdSection>
            <span>{icon}</span>
            <Styles.Id>{featureId}</Styles.Id>
          </Styles.IdSection>
          {isPartiallyPromoted && (
            <Styles.PartiallyPromotedIcon title={t('features.partiallyPromoted')} />
          )}
        </Styles.Heading>
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
