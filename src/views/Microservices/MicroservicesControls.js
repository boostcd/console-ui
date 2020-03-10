import { Box, Flex } from '@rebass/grid';
import PropTypes from 'prop-types';
import React from 'react';

import gatewayApi from '../../apis/GatewayApi';
import Button from '../../components/Button';
import { environmentType } from '../../types/microservices';
import * as Styles from './MicroservicesControls.styled';

class MicroservicesControls extends React.PureComponent {
  renderBuildAction(environmentName) {
    return (
      <Button type='primary' onClick={() => gatewayApi.buildAll(environmentName)}>
        Build all
      </Button>
    );
  }

  renderTestAction(environmentName) {
    return (
      <Button type='primary' onClick={() => gatewayApi.testAll(environmentName)}>
        Run tests
      </Button>
    );
  }

  renderPromoteAction(environmentName) {
    return (
      <Button type='primary' onClick={() => gatewayApi.promoteAll(environmentName)}>
        Promote all
      </Button>
    );
  }

  renderGoLiveAction(environmentName) {
    return (
      <Button type='primary' onClick={() => gatewayApi.goLive(environmentName)}>
        Go live!
      </Button>
    );
  }

  renderBackOutAction(environmentName) {
    return (
      <Button type='primary' onClick={() => gatewayApi.backOut(environmentName)}>
        Back out!
      </Button>
    );
  }

  renderEnvironment = (environment, index) => {
    const { data } = this.props;
    const { name, displayName, tested, actions } = environment;

    const key = `controls:${name}@${index}`;
    const width = 1 / data.length;

    return (
      <Box key={key} width={width} px={2}>
        <Styles.StageTitle>
          <span>{displayName || name}</span>
          {actions.test && !tested && (
            <Styles.TestExclamationCircle title='Untested or tests failing' />
          )}
        </Styles.StageTitle>
        <Styles.StageActions>
          {actions.build && this.renderBuildAction(name)}
          {actions.test && this.renderTestAction(name)}
          {actions.promote && this.renderPromoteAction(name)}
          {actions.goLive && this.renderGoLiveAction(name)}
          {actions.backOut && this.renderBackOutAction(name)}
        </Styles.StageActions>
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

MicroservicesControls.propTypes = {
  data: PropTypes.arrayOf(environmentType),
};

export default MicroservicesControls;
