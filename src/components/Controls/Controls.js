import { Box, Flex } from '@rebass/grid';
import PropTypes from 'prop-types';
import React from 'react';

import gatewayApi from '../../apis/GatewayApi';
import featuresType from '../../types/features';
import microservicesType from '../../types/microservices';
import t from '../../utils/translate';
import Button from '../Button';
import * as Styles from './Controls.styled';

class Controls extends React.PureComponent {
  renderBuildAction(environment) {
    const { name, state = {} } = environment;

    return (
      <Button
        type='primary'
        isDisabled={state.build}
        onClick={this.props.onStateChange.bind(null, gatewayApi.buildAll, name)}
      >
        <span>{t('common.buildAll')}</span>
        {state.build && <Styles.StateIcon />}
      </Button>
    );
  }

  renderTestAction(environment) {
    const { name, state = {} } = environment;

    return (
      <Button
        type='primary'
        isDisabled={state.test}
        onClick={this.props.onStateChange.bind(null, gatewayApi.testAll, name)}
      >
        <span>{t('common.testAll')}</span>
        {state.test && <Styles.StateIcon />}
      </Button>
    );
  }

  renderPromoteAction(environment) {
    const { name, state = {} } = environment;

    return (
      <Button
        type='primary'
        isDisabled={state.promote}
        onClick={this.props.onStateChange.bind(null, gatewayApi.promoteAll, name)}
      >
        <span>{t('common.promoteAll')}</span>
        {state.promote && <Styles.StateIcon />}
      </Button>
    );
  }

  renderGoLiveAction(environment) {
    const { name, state = {} } = environment;

    return (
      <Button
        type='primary'
        isDisabled={state.goLive}
        onClick={this.props.onStateChange.bind(null, gatewayApi.goLive, name)}
      >
        <span>{t('common.goLive')}</span>
        {state.goLive && <Styles.StateIcon />}
      </Button>
    );
  }

  renderBackOutAction(environment) {
    const { name, state = {} } = environment;

    return (
      <Button
        type='primary'
        isDisabled={state.backOut}
        onClick={this.props.onStateChange.bind(null, gatewayApi.backOut, name)}
      >
        <span>{t('common.backOut')}</span>
        {state.backOut && <Styles.StateIcon />}
      </Button>
    );
  }

  renderEnvironment = (environment, index) => {
    const { data, itemAccessor } = this.props;
    const {
      name,
      displayName,
      indicatorColour,
      tested,
      actions = {},
      state = {},
      [itemAccessor]: items,
    } = environment;

    const key = `controls:${name}@${index}`;
    const width = 1 / data.length;
    const hasActions = Object.values(actions).some(Boolean);

    const isTestable = tested !== null && tested !== undefined;
    const isEnvironmentActive = Object.values(state).some(Boolean);
    const isAppActive = items.reduce(
      (value, item) => value || Object.values(item.state || {}).some(Boolean),
      false
    );
    const isActive = isEnvironmentActive || isAppActive;

    return (
      <Box key={key} width={width} px={2}>
        <Styles.Title>
          <Styles.Indicator colour={indicatorColour} isActive={isActive} />
          <span>{displayName || name}</span>
          {isTestable && (
            <>
              {tested ? (
                <Styles.TestsSuccessful title={t('common.testsSuccessful')} />
              ) : (
                <Styles.TestsFailed title={t('common.testsFailed')} />
              )}
            </>
          )}
        </Styles.Title>
        <Styles.Actions>
          {hasActions ? (
            <>
              {actions.build && this.renderBuildAction(environment)}
              {actions.test && this.renderTestAction(environment)}
              {actions.promote && this.renderPromoteAction(environment)}
              {actions.goLive && this.renderGoLiveAction(environment)}
              {actions.backOut && this.renderBackOutAction(environment)}
            </>
          ) : (
            <Styles.NoActions>No actions enabled!</Styles.NoActions>
          )}
        </Styles.Actions>
      </Box>
    );
  };

  render() {
    const { data } = this.props;

    if (!data) return null;

    return (
      <Styles.Wrapper>
        <Flex>{data.map(this.renderEnvironment)}</Flex>
      </Styles.Wrapper>
    );
  }
}

Controls.propTypes = {
  data: PropTypes.oneOfType([microservicesType, featuresType]).isRequired,
  itemAccessor: PropTypes.string.isRequired,
  onStateChange: PropTypes.func.isRequired,
};

export default Controls;
