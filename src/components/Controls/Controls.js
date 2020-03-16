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
      <Button type='primary' isDisabled={state.build} onClick={() => gatewayApi.buildAll(name)}>
        <span>{t('common.buildAll')}</span>
        {state.build && <Styles.StateIcon />}
      </Button>
    );
  }

  renderTestAction(environment) {
    const { name, state = {} } = environment;

    return (
      <Button type='primary' isDisabled={state.test} onClick={() => gatewayApi.testAll(name)}>
        <span>{t('common.testAll')}</span>
        {state.test && <Styles.StateIcon />}
      </Button>
    );
  }

  renderPromoteAction(environment) {
    const { name, tested, state = {} } = environment;
    const hasError = !tested;
    const title = hasError ? t('common.untested') : '';

    return (
      <Button
        type='primary'
        title={title}
        hasError={hasError}
        isDisabled={state.promote}
        onClick={() => gatewayApi.promoteAll(name)}
      >
        <span>{t('common.promoteAll')}</span>
        {state.promote && <Styles.StateIcon />}
      </Button>
    );
  }

  renderGoLiveAction(environment) {
    const { name, tested, state = {} } = environment;
    const hasError = !tested;
    const title = hasError ? t('common.untested') : '';

    return (
      <Button
        type='primary'
        title={title}
        hasError={hasError}
        isDisabled={state.goLive}
        onClick={() => gatewayApi.goLive(name)}
      >
        <span>{t('common.goLive')}</span>
        {state.goLive && <Styles.StateIcon />}
      </Button>
    );
  }

  renderBackOutAction(environment, currentIndex) {
    const { name, state = {} } = environment;

    const previousEnvironment = this.props.data[currentIndex - 1];
    const hasError = !previousEnvironment.tested;
    const title = hasError ? t('common.untested') : '';

    return (
      <Button
        type='primary'
        title={title}
        hasError={hasError}
        isDisabled={state.backOut}
        onClick={() => gatewayApi.backOut(name)}
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
      [itemAccessor]: items,
    } = environment;

    const key = `controls:${name}@${index}`;
    const width = 1 / data.length;
    const hasActions = Object.values(actions).some(Boolean);
    const isActive = items.reduce(
      (state, item) => state || Object.values(item.state || {}).some(Boolean),
      false
    );

    return (
      <Box key={key} width={width} px={2}>
        <Styles.Title>
          <Styles.Indicator colour={indicatorColour} isActive={isActive} />
          <span>{displayName || name}</span>
          {tested === false ? (
            <Styles.TestsFailed title={t('common.testsFailed')} />
          ) : (
            <Styles.TestsSuccessful title={t('common.testsSuccessful')} />
          )}
        </Styles.Title>
        <Styles.Actions>
          {hasActions ? (
            <>
              {actions.build && this.renderBuildAction(environment)}
              {actions.test && this.renderTestAction(environment)}
              {actions.promote && this.renderPromoteAction(environment)}
              {actions.goLive && this.renderGoLiveAction(environment)}
              {actions.backOut && this.renderBackOutAction(environment, index)}
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
};

export default Controls;
