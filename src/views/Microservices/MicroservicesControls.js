import { Box, Flex } from '@rebass/grid';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/Button';
import stall from '../../utils/stall';
import * as Styles from './MicroservicesControls.styled';

class MicroservicesControls extends React.PureComponent {
  state = {
    actionsDisabled: false,
  };

  handleAction = (apiFn) => async () => {
    console.log('Api call', apiFn);

    this.setState({
      actionsDisabled: true,
    });

    await stall(2000);

    this.setState({
      actionsDisabled: false,
    });
  };

  render() {
    const { actionsDisabled } = this.state;
    // const { data } = this.props;

    return (
      <Styles.Wrapper>
        <Flex>
          <Box width={1 / 4} px={2}>
            <Styles.StageTitle>Build</Styles.StageTitle>
            <Styles.StageActions>
              <Button type='secondary' isDisabled={actionsDisabled} onClick={this.handleAction()}>
                Build all
              </Button>
              <Button type='secondary' isDisabled={actionsDisabled} onClick={this.handleAction()}>
                Promote all
              </Button>
            </Styles.StageActions>
          </Box>
          <Box width={1 / 4} px={2}>
            <Styles.StageTitle>
              <Styles.TestCircle />
              <span>Test</span>
            </Styles.StageTitle>
            <Styles.StageActions>
              <Button type='secondary' isDisabled={actionsDisabled} onClick={() => undefined}>
                Run tests
              </Button>
              <Button type='secondary' isDisabled={actionsDisabled} onClick={() => undefined}>
                Promote all
              </Button>
            </Styles.StageActions>
          </Box>
          <Box width={1 / 4} px={2}>
            <Styles.StageTitle>
              <Styles.StagingCircle />
              <span>Staging</span>
            </Styles.StageTitle>
            <Styles.StageActions>
              <Button type='secondary' isDisabled={actionsDisabled} onClick={() => undefined}>
                Run tests
              </Button>
              <Button type='secondary' isDisabled={actionsDisabled} onClick={() => undefined}>
                Go live!
              </Button>
            </Styles.StageActions>
          </Box>
          <Box width={1 / 4} px={2}>
            <Styles.StageTitle>
              <Styles.LiveCircle />
              <span>Live</span>
            </Styles.StageTitle>
            <Button type='secondary' isDisabled={actionsDisabled} onClick={() => undefined}>
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
