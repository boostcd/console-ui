import { Box, Flex } from '@rebass/grid';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import buildApi from '../../apis/BuildApi';
import testApi from '../../apis/TestApi';
import Button from '../../components/Button';
import Card from '../../components/Card';
import ENVIRONMENT from '../../constants/environment';
import isEnvironmentUntested from '../../utils/domain/isEnvironmentUntested';
import * as Styles from './MicroservicesApplications.styled';

class MicroservicesApplications extends React.PureComponent {
  handleBuildApp = async (appName) => {
    await buildApi.build(appName);
  };

  handlePromoteApp = async (appName) => {
    await testApi.promote(appName);
  };

  handleReleaseApp = async (appName) => {
    await buildApi.release(appName);
  };

  renderBuildCard = (app, index) => {
    return (
      <Card
        key={`${ENVIRONMENT.BUILD}-${index}`}
        app={app}
        hasError={!app.canRelease || !app.deployed}
        actions={
          <>
            <Button type='primary' onClick={this.handleBuildApp.bind(this, app.name)}>
              Build
            </Button>
            <Button
              type='primary'
              hasError={!app.canRelease}
              onClick={this.handlePromoteApp.bind(this, app.name)}
            >
              Promote
            </Button>
            <Link to={`/microservices/${ENVIRONMENT.BUILD}/${app.name}`}>
              <Button type='primary'>View</Button>
            </Link>
          </>
        }
      />
    );
  };

  renderTestCard = (app, index) => {
    return (
      <Card
        key={`${ENVIRONMENT.TEST}-${index}`}
        app={app}
        hasError={!app.deployed}
        actions={
          <>
            <Button
              type='primary'
              hasError={isEnvironmentUntested(this.props.data.testEnv)}
              onClick={this.handlePromoteApp.bind(this, app.name)}
            >
              Promote
            </Button>
            <Link to={`/microservices/${ENVIRONMENT.TEST}/${app.name}`}>
              <Button type='primary'>View</Button>
            </Link>
          </>
        }
      />
    );
  };

  renderStagingCard = (app, index) => {
    return (
      <Card
        key={`${ENVIRONMENT.STAGING}-${index}`}
        app={app}
        hasError={!app.deployed}
        actions={
          <Link to={`/microservices/${ENVIRONMENT.STAGING}/${app.name}`}>
            <Button type='primary'>View</Button>
          </Link>
        }
      />
    );
  };

  renderLiveCard = (app, index) => {
    return (
      <Card
        key={`${ENVIRONMENT.LIVE}-${index}`}
        app={app}
        hasError={!app.deployed}
        actions={
          <Link to={`/microservices/${ENVIRONMENT.LIVE}/${app.name}`}>
            <Button type='primary'>View</Button>
          </Link>
        }
      />
    );
  };

  render() {
    const { data } = this.props;

    return (
      <Styles.Wrapper>
        <Flex>
          <Box width={1 / 4} px={2}>
            {data.buildEnv.buildApps.map(this.renderBuildCard)}
          </Box>
          <Box width={1 / 4} px={2}>
            {data.testEnv.apps.map(this.renderTestCard)}
          </Box>
          <Box width={1 / 4} px={2}>
            {data.live.apps.map(this.renderStagingCard)}
          </Box>
          <Box width={1 / 4} px={2}>
            {data.live.apps.map(this.renderLiveCard)}
          </Box>
        </Flex>
      </Styles.Wrapper>
    );
  }
}

MicroservicesApplications.propTypes = {
  data: PropTypes.any,
};

export default MicroservicesApplications;
