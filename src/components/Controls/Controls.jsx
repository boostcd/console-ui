import { Flex } from '@rebass/grid';
import PropTypes from 'prop-types';
import React from 'react';

import gatewayApi from '../../apis/GatewayApi';
import featuresType from '../../types/features';
import microservicesType from '../../types/microservices';
import t from '../../utils/translate';
import Button from '../Button/Button';
import FixedWidthBox from '../FixedWidthBox/FixedWidthBox';
import * as Styles from './Controls.styled';

class Controls extends React.PureComponent {
  renderBuildAction(environment) {
    const { onStateChange, buttonBuildLabel } = this.props;
    const { name, state = {} } = environment;

    return (
      <Button
        variant='primary'
        preventEvents={state.build}
        onClick={onStateChange.bind(null, buttonBuildLabel, gatewayApi.buildAll, name)}
      >
        <span>{buttonBuildLabel}</span>
        {state.build && <Styles.StateIcon />}
      </Button>
    );
  }

  renderTestAction(environment) {
    const { onStateChange } = this.props;
    const { name, state = {} } = environment;

    return (
      <Button
        variant='primary'
        preventEvents={state.test}
        onClick={onStateChange.bind(null, t('common.testAll'), gatewayApi.testAll, name)}
      >
        <span>{t('common.testAll')}</span>
        {state.test && <Styles.StateIcon />}
      </Button>
    );
  }

  renderPromoteAction(environment) {
    const { onStateChange, buttonPromoteLabel } = this.props;
    const { name, state = {} } = environment;

    return (
      <Button
        variant='primary'
        preventEvents={state.promote}
        onClick={onStateChange.bind(null, buttonPromoteLabel, gatewayApi.promoteAll, name)}
      >
        <span>{buttonPromoteLabel}</span>
        {state.promote && <Styles.StateIcon />}
      </Button>
    );
  }

  renderGoLiveAction(environment) {
    const { onStateChange } = this.props;
    const { name, state = {} } = environment;

    return (
      <Button
        variant='primary'
        preventEvents={state.goLive}
        onClick={onStateChange.bind(null, t('common.goLive'), gatewayApi.goLive, name)}
      >
        <span>{t('common.goLive')}</span>
        {state.goLive && <Styles.StateIcon />}
      </Button>
    );
  }

  renderBackOutAction(environment) {
    const { onStateChange } = this.props;
    const { name, state = {} } = environment;

    return (
      <Button
        variant='primary'
        preventEvents={state.backOut}
        onClick={onStateChange.bind(null, t('common.backOut'), gatewayApi.backOut, name)}
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
      [itemAccessor]: items = [],
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
      <FixedWidthBox key={key} width={width} px={2}>
        <Styles.Title>
          <Styles.IndicatorIcon colour={indicatorColour} isActive={isActive} />
          <span>{displayName || name}</span>
          {isTestable && (
            <>
              {tested ? (
                <Styles.TestsSuccessfulIcon title={t('common.testsSuccessful')} />
              ) : (
                <Styles.TestsFailedIcon title={t('common.testsFailed')} />
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
            <Styles.NoActions></Styles.NoActions>
          )}
        </Styles.Actions>
      </FixedWidthBox>
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
  // Custom button labels for specific usage on the features page
  buttonBuildLabel: PropTypes.string,
  buttonPromoteLabel: PropTypes.string,
};

Controls.defaultProps = {
  buttonBuildLabel: t('common.buildAll'),
  buttonPromoteLabel: t('common.promoteAll'),
};

export default Controls;
