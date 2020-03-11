import { Box, Flex } from '@rebass/grid';
import PropTypes from 'prop-types';
import React from 'react';

import gatewayApi from '../../apis/GatewayApi';
import featuresType from '../../types/features';
import microservicesType from '../../types/microservices';
import Button from '../Button';
import * as Styles from './Controls.styled';

class Controls extends React.PureComponent {
  renderBuildAction(environment) {
    const { name, state = {} } = environment;

    return (
      <Button type='primary' isDisabled={state.build} onClick={() => gatewayApi.buildAll(name)}>
        <span>Build all</span>
        {state.build && <Styles.StateIcon />}
      </Button>
    );
  }

  renderTestAction(environment) {
    const { name, state = {} } = environment;

    return (
      <Button type='primary' isDisabled={state.test} onClick={() => gatewayApi.testAll(name)}>
        <span>Run tests</span>
        {state.test && <Styles.StateIcon />}
      </Button>
    );
  }

  renderPromoteAction(environment) {
    const { name, tested, state = {} } = environment;
    const hasError = !tested;
    const title = hasError ? 'Untested or tests failing' : '';

    return (
      <Button
        type='primary'
        title={title}
        hasError={hasError}
        isDisabled={state.promote}
        onClick={() => gatewayApi.promoteAll(name)}
      >
        <span>Promote all</span>
        {state.promote && <Styles.StateIcon />}
      </Button>
    );
  }

  renderGoLiveAction(environment) {
    const { name, tested, state = {} } = environment;
    const hasError = !tested;
    const title = hasError ? 'Untested or tests failing' : '';

    return (
      <Button
        type='primary'
        title={title}
        hasError={hasError}
        isDisabled={state.goLive}
        onClick={() => gatewayApi.goLive(name)}
      >
        <span>Go live!</span>
        {state.goLive && <Styles.StateIcon />}
      </Button>
    );
  }

  renderBackOutAction(environment, currentIndex) {
    const { name, state = {} } = environment;

    const previousEnvironment = this.props.data[currentIndex - 1];
    const hasError = !previousEnvironment.tested;
    const title = hasError ? 'Untested or tests failing' : '';

    return (
      <Button
        type='primary'
        title={title}
        hasError={hasError}
        isDisabled={state.backOut}
        onClick={() => gatewayApi.backOut(name)}
      >
        <span>Back out!</span>
        {state.backOut && <Styles.StateIcon />}
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
        <Styles.Title>
          {actions.test && !tested && <Styles.ErrorIcon title='Untested or tests failing' />}
          <span>{displayName || name}</span>
        </Styles.Title>
        <Styles.Actions>
          {actions.build && this.renderBuildAction(environment)}
          {actions.test && this.renderTestAction(environment)}
          {actions.promote && this.renderPromoteAction(environment)}
          {actions.goLive && this.renderGoLiveAction(environment)}
          {actions.backOut && this.renderBackOutAction(environment, index)}
        </Styles.Actions>
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

Controls.propTypes = {
  data: PropTypes.oneOfType([microservicesType, featuresType]),
};

export default Controls;
