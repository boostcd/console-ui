import { Box, Flex } from '@rebass/grid';
import PropTypes from 'prop-types';
import React from 'react';

import buildApi from '../../apis/BuildApi';
import prodApi from '../../apis/ProdApi';
import testApi from '../../apis/TestApi';
import Button from '../../components/Button';
import * as Styles from './MicroservicesControls.styled';

const isUntested = (environment) => environment.testStatus === 'Untested';

class MicroservicesControls extends React.PureComponent {
  state = {
    actionsDisabled: false,
  };

  handleAction = (apiFn) => async () => {
    this.setState({
      actionsDisabled: true,
    });

    await apiFn();

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
          <Box width={1 / 4} px={3}>
            <Styles.StageTitle>Build</Styles.StageTitle>
            <Styles.StageActions>
              <Button
                type='secondary'
                isDisabled={actionsDisabled}
                onClick={this.handleAction(buildApi.buildAll)}
              >
                Build all
              </Button>
              <Button
                type='secondary'
                isDisabled={actionsDisabled}
                onClick={this.handleAction(buildApi.releaseAll)}
              >
                Promote all
              </Button>
            </Styles.StageActions>
          </Box>
          <Box width={1 / 4} px={3}>
            <Styles.StageTitle>
              <span>Test</span>
              {isUntested(data.testEnv) && (
                <Styles.TestExclamationCircle title='Untested or tests failing' />
              )}
            </Styles.StageTitle>
            <Styles.StageActions>
              <Button
                type='secondary'
                isDisabled={actionsDisabled}
                onClick={this.handleAction(testApi.runTests)}
              >
                Run tests
              </Button>
              <Button
                type='secondary'
                isDisabled={actionsDisabled}
                hasError={isUntested(data.testEnv)}
                onClick={this.handleAction(testApi.promoteAll)}
              >
                Promote all
              </Button>
            </Styles.StageActions>
          </Box>
          <Box width={1 / 4} px={3}>
            <Styles.StageTitle>
              {/* <Styles.StagingCircle /> */}
              <span>Staging</span>
              {isUntested(data.staging) && (
                <Styles.TestExclamationCircle title='Untested or tests failing' />
              )}
            </Styles.StageTitle>
            <Styles.StageActions>
              <Button
                type='secondary'
                isDisabled={actionsDisabled}
                onClick={this.handleAction(prodApi.runTests)}
              >
                Run tests
              </Button>
              <Button
                type='secondary'
                isDisabled={actionsDisabled}
                hasError={isUntested(data.staging)}
                onClick={this.handleAction(prodApi.promoteLive)}
              >
                Go live!
              </Button>
            </Styles.StageActions>
          </Box>
          <Box width={1 / 4} px={3}>
            <Styles.StageTitle>
              {/* <Styles.LiveCircle /> */}
              <span>Live</span>
            </Styles.StageTitle>
            <Button
              type='secondary'
              isDisabled={actionsDisabled}
              hasError={isUntested(data.staging)}
              onClick={this.handleAction(prodApi.promoteLive)}
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
