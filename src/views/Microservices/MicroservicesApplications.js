import { Box, Flex } from '@rebass/grid';
import PropTypes from 'prop-types';
import React from 'react';

// import Card from '../../components/Card';
import * as Styles from './MicroservicesApplications.styled';

class MicroservicesApplications extends React.PureComponent {
  renderCard(app, index) {
    // return (
    //   <Card
    //     key={index}
    //     app={app}
    //   />
    // );
    return null;
  }

  render() {
    const { data } = this.props;

    return (
      <Styles.Wrapper>
        <Flex mt={20}>
          <Box width={1 / 4} px={3}>
            Builds apps
            {/* {data.buildEnv.buildApps.map((app, index) => <div key={index}>{app.name}</div>)} */}
          </Box>
          <Box width={1 / 4} px={3}>
            Test apps
          </Box>
          <Box width={1 / 4} px={3}>
            {data.staging.apps.map(this.renderCard)}
          </Box>
          <Box width={1 / 4} px={3}>
            Live apps
          </Box>
        </Flex>
      </Styles.Wrapper>
    );
  }
}

MicroservicesApplications.propTypes = {
  data: PropTypes.any,
  apis: PropTypes.any,
};

export default MicroservicesApplications;
