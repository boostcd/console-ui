import { Box, Flex } from '@rebass/grid';
import PropTypes from 'prop-types';
import React from 'react';

import gatewayApi from '../../apis/GatewayApi';
import Button from '../../components/Button';
import { environmentType } from '../../types/microservices';
import * as Styles from './MicroservicesControls.styled';

class MicroservicesControls extends React.PureComponent {
  renderBuildAction(environment) {
    return (
      <Button type='primary' onClick={() => gatewayApi.buildAll(environment.name)}>
        Build all
      </Button>
    );
  }

  renderTestAction(environment) {
    return (
      <Button type='primary' onClick={() => gatewayApi.testAll(environment.name)}>
        Run tests
      </Button>
    );
  }

  renderPromoteAction(environment) {
    return (
      <Button
        type='primary'
        hasError={!environment.tested}
        onClick={() => gatewayApi.promoteAll(environment.name)}
      >
        Promote all
      </Button>
    );
  }

  renderGoLiveAction(environment) {
    return (
      <Button
        type='primary'
        hasError={!environment.tested}
        onClick={() => gatewayApi.goLive(environment.name)}
      >
        Go live!
      </Button>
    );
  }

  renderBackOutAction(environmentName, currentIndex) {
    const previousEnvironment = this.props.data[currentIndex - 1];

    return (
      <Button
        type='primary'
        hasError={!previousEnvironment.tested}
        onClick={() => gatewayApi.backOut(environmentName)}
      >
        Back out!
      </Button>
    );
  }

  renderEnvironment = (environment, index) => {
    const { data } = this.props;
    const { name, displayName, tested, actions = {} } = environment;

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
          {actions.build && this.renderBuildAction(environment)}
          {actions.test && this.renderTestAction(environment)}
          {actions.promote && this.renderPromoteAction(environment)}
          {actions.goLive && this.renderGoLiveAction(environment)}
          {actions.backOut && this.renderBackOutAction(environment, index)}
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
  data: PropTypes.arrayOf(PropTypes.shape(environmentType)),
};

export default MicroservicesControls;
