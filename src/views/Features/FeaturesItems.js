import { Box, Flex } from '@rebass/grid';
import React from 'react';

import DataFallback from '../../components/DataFallback';
import FeatureCard from '../../components/FeatureCard';
import featuresType from '../../types/features';
import t from '../../utils/translate';

class FeaturesItems extends React.PureComponent {
  renderCard = (environment, feature, index) => {
    const { featureId, title, status, url, description, promoted, waitingSince } = feature;
    const key = `features:${environment.name}@${featureId}@${index}`;

    return (
      <a
        key={key}
        href={url}
        title={description || title}
        target='_blank'
        rel='noopener noreferrer'
      >
        <FeatureCard
          featureId={featureId}
          title={title}
          status={status}
          url={url}
          description={description}
          promoted={promoted}
          waitingSince={waitingSince}
        />
      </a>
    );
  };

  renderEnvironment = (environment, index) => {
    const { data } = this.props;

    const width = 1 / data.length;
    const key = `features:${environment.name}@${index}`;

    return (
      <Box key={key} width={width} px={2}>
        {environment.features.map(this.renderCard.bind(this, environment))}
      </Box>
    );
  };

  render() {
    const { data } = this.props;
    const isEmpty = data.every((env) => env.features.length === 0);

    if (isEmpty) return <DataFallback title={t('features.dataFallback')} />;

    return <Flex>{data.map(this.renderEnvironment)}</Flex>;
  }
}

FeaturesItems.propTypes = {
  data: featuresType,
};

export default FeaturesItems;
