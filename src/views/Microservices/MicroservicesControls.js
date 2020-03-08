import { Box, Flex } from '@rebass/grid';
import PropTypes from 'prop-types';
import React from 'react';

import buildApi from '../../apis/BuildApi';
import prodApi from '../../apis/ProdApi';
import testApi from '../../apis/TestApi';
import Button from '../../components/Button';
import isEnvironmentUntested from '../../utils/domain/isEnvironmentUntested';
import * as Styles from './MicroservicesControls.styled';

class MicroservicesControls extends React.PureComponent {
  state = {
    actionsDisabled: false,
  };

  handleAction = async (apiAction) => {
    this.setState({
      actionsDisabled: true,
    });

    await apiAction();

    this.setState({
      actionsDisabled: false,
    });
  };

  render() {
    const { actionsDisabled } = this.state;
    const { data } = this.props;

    return (
      <Styles.Wrapper>
        <Flex>
          <Box width={1 / 4} px={2}>
            <Styles.StageTitle>Build</Styles.StageTitle>
            <Styles.StageActions>
              <Button
                type='secondary'
                isDisabled={actionsDisabled}
                onClick={this.handleAction.bind(this, buildApi.buildAll)}
              >
                Build all
              </Button>
              <Button
                type='secondary'
                isDisabled={actionsDisabled}
                onClick={this.handleAction.bind(this, buildApi.releaseAll)}
              >
                Promote all
              </Button>
            </Styles.StageActions>
          </Box>
          <Box width={1 / 4} px={2}>
            <Styles.StageTitle>
              <span>Test</span>
              {isEnvironmentUntested(data.testEnv) && (
                <Styles.TestExclamationCircle title='Untested or tests failing' />
              )}
            </Styles.StageTitle>
            <Styles.StageActions>
              <Button
                type='secondary'
                isDisabled={actionsDisabled}
                onClick={this.handleAction.bind(this, testApi.runTests)}
              >
                Run tests
              </Button>
              <Button
                type='secondary'
                isDisabled={actionsDisabled}
                hasError={isEnvironmentUntested(data.testEnv)}
                onClick={this.handleAction.bind(this, testApi.promoteAll)}
              >
                Promote all
              </Button>
            </Styles.StageActions>
          </Box>
          <Box width={1 / 4} px={2}>
            <Styles.StageTitle>
              {/* <Styles.StagingCircle /> */}
              <span>Staging</span>
              {isEnvironmentUntested(data.staging) && (
                <Styles.TestExclamationCircle title='Untested or tests failing' />
              )}
            </Styles.StageTitle>
            <Styles.StageActions>
              <Button
                type='secondary'
                isDisabled={actionsDisabled}
                onClick={this.handleAction.bind(this, prodApi.runTests)}
              >
                Run tests
              </Button>
              <Button
                type='secondary'
                isDisabled={actionsDisabled}
                hasError={isEnvironmentUntested(data.staging)}
                onClick={this.handleAction.bind(this, prodApi.promoteLive)}
              >
                Go live!
              </Button>
            </Styles.StageActions>
          </Box>
          <Box width={1 / 4} px={2}>
            <Styles.StageTitle>
              {/* <Styles.LiveCircle /> */}
              <span>Live</span>
            </Styles.StageTitle>
            <Button
              type='secondary'
              isDisabled={actionsDisabled}
              hasError={isEnvironmentUntested(data.staging)}
              onClick={this.handleAction.bind(this, prodApi.promoteLive)}
            >
              Back out!
            </Button>
          </Box>
        </Flex>
      </Styles.Wrapper>
    );
  }
}

MicroservicesControls.propTypes = {
  data: PropTypes.any,
};

export default MicroservicesControls;
