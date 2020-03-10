import { Box, Flex } from '@rebass/grid';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import gatewayApi from '../../apis/GatewayApi';
import Button from '../../components/Button';
import MicroserviceCard from '../../components/MicroserviceCard';
import { environmentType } from '../../types/microservices';
import * as Styles from './MicroservicesApplications.styled';

class MicroservicesApplications extends React.PureComponent {
  renderBuildAction(environmentName, appName) {
    return (
      <Button type='primary' onClick={() => gatewayApi.build(environmentName, appName)}>
        Build
      </Button>
    );
  }

  renderPromoteAction(environmentName, appName) {
    return (
      <Button type='primary' onClick={() => gatewayApi.promote(environmentName, appName)}>
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
                {actions.build && this.renderBuildAction(environment.name, name)}
                {actions.promote && this.renderPromoteAction(environment.name, name)}
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

    return (
      <Styles.Wrapper>
        <Flex>{data.map(this.renderEnvironment)}</Flex>
      </Styles.Wrapper>
    );
  }
}

MicroservicesApplications.propTypes = {
  data: PropTypes.arrayOf(environmentType),
};

export default MicroservicesApplications;
