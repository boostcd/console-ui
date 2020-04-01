import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from 'reflexbox';

import gatewayApi from '../../apis/GatewayApi';
import Button from '../../components/Button/Button';
import DataFallback from '../../components/DataFallback/DataFallback';
import FixedWidthBox from '../../components/FixedWidthBox/FixedWidthBox';
import MicroserviceCard from '../../components/MicroserviceCard/MicroserviceCard';
import microservicesType from '../../types/microservices';
import t from '../../utils/translate';
import * as Styles from './MicroservicesApplications.styled';

class MicroservicesApplications extends React.PureComponent {
  renderBuildAction(environment, app) {
    const { name: environmentName } = environment;
    const { name: appName, state = {} } = app;

    return (
      <Button
        variant='primary'
        preventEvents={state.build}
        onClick={this.props.onStateChange.bind(
          null,
          t('common.build'),
          gatewayApi.build,
          environmentName,
          appName
        )}
      >
        <span>{t('common.build')}</span>
        {state.build && <Styles.StateIcon />}
      </Button>
    );
  }

  renderPromoteAction(environment, app) {
    const { name: environmentName } = environment;
    const { name: appName, state = {} } = app;

    return (
      <Button
        variant='primary'
        preventEvents={state.promote}
        onClick={this.props.onStateChange.bind(
          null,
          t('common.promote'),
          gatewayApi.promote,
          environmentName,
          appName
        )}
      >
        <span>{t('common.promote')}</span>
        {state.promote && <Styles.StateIcon />}
      </Button>
    );
  }

  renderCard = (environment, app, index) => {
    const { name, displayName, version, tested, deployed, deployedDate, state, actions = {} } = app;
    const key = `apps:${environment.name}@${name}@${index}`;

    return (
      <MicroserviceCard
        key={key}
        name={name}
        version={version}
        displayName={displayName}
        tested={tested}
        deployed={deployed}
        deployedDate={deployedDate}
        state={state}
        actions={
          <>
            {actions.build && this.renderBuildAction(environment, app)}
            {actions.promote && this.renderPromoteAction(environment, app)}
            <Link to={`/microservices/${environment.name}/${app.name}`}>
              <Button variant='primary'>{t('common.view')}</Button>
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
      <FixedWidthBox key={key} width={width} px={2}>
        {environment.apps.map(this.renderCard.bind(this, environment))}
      </FixedWidthBox>
    );
  };

  render() {
    const { data } = this.props;
    const isEmpty = data.every((env) => (env.apps ? env.apps.length === 0 : true));

    if (isEmpty) return <DataFallback title={t('microservices.dataFallback')} />;

    return (
      <Styles.Wrapper>
        <Flex>{data.map(this.renderEnvironment)}</Flex>
      </Styles.Wrapper>
    );
  }
}

MicroservicesApplications.propTypes = {
  data: microservicesType,
  onStateChange: PropTypes.func.isRequired,
};

MicroservicesApplications.defaultProps = {
  data: [],
};

export default MicroservicesApplications;
