import { Box, Flex } from '@rebass/grid';
import React from 'react';
import { Link } from 'react-router-dom';

import gatewayApi from '../../apis/GatewayApi';
import Button from '../../components/Button';
import DataFallback from '../../components/DataFallback';
import MicroserviceCard from '../../components/MicroserviceCard';
import microservicesType from '../../types/microservices';
import * as Styles from './MicroservicesApplications.styled';

class MicroservicesApplications extends React.PureComponent {
  renderBuildAction(environment, app) {
    return (
      <Button type='primary' onClick={() => gatewayApi.build(environment.name, app.name)}>
        Build
      </Button>
    );
  }

  renderPromoteAction(environment, app) {
    const hasError = !environment.tested || !app.tested;

    return (
      <Button
        type='primary'
        hasError={hasError}
        onClick={() => gatewayApi.promote(environment.name, app.name)}
      >
        Promote
      </Button>
    );
  }

  renderCard = (environment, app, index) => {
    const { name, displayName, version, deployed, deployedDate, actions } = app;
    const key = `apps:${environment.name}@${name}@${index}`;

    return (
      <MicroserviceCard
        key={key}
        name={name}
        version={version}
        displayName={displayName}
        deployed={deployed}
        deployedDate={deployedDate}
        actions={
          <>
            {actions && (
              <>
                {actions.build && this.renderBuildAction(environment, app)}
                {actions.promote && this.renderPromoteAction(environment, app)}
              </>
            )}
            <Link to={`/microservices/${environment.name}/${app.name}`}>
              <Button type='primary'>View</Button>
            </Link>
          </>
        }
      />
    );
  };

  renderEnvironment = (environment, index) => {
    const { data } = this.props;

    const width = 1 / data.length;
    const key = `apps:${environment}@${index}`;

    return (
      <Box key={key} width={width} px={2}>
        {environment.apps.map(this.renderCard.bind(this, environment))}
      </Box>
    );
  };

  render() {
    const { data } = this.props;

    const isEmpty = data.every((env) => env.apps.length === 0);
    if (isEmpty) return <DataFallback title='No services available!' />;

    return (
      <Styles.Wrapper>
        <Flex>{data.map(this.renderEnvironment)}</Flex>
      </Styles.Wrapper>
    );
  }
}

MicroservicesApplications.propTypes = {
  data: microservicesType,
};

export default MicroservicesApplications;
