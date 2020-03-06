import { Box, Flex } from '@rebass/grid';
import PropTypes from 'prop-types';
import React from 'react';

class MicroservicesApplications extends React.PureComponent {
  render() {
    // const { data } = this.props;
    // {data.buildEnv.buildApps.map(this.renderCard)}

    return (
      <Flex mt={20}>
        <Box width={1 / 4} px={2}>
          Build apps
        </Box>
        <Box width={1 / 4} px={2}>
          Test apps
        </Box>
        <Box width={1 / 4} px={2}>
          Staging apps
        </Box>
        <Box width={1 / 4} px={2}>
          Live apps
        </Box>
      </Flex>
    );
  }
}

MicroservicesApplications.propTypes = {
  data: PropTypes.any,
  apis: PropTypes.any,
};

export default MicroservicesApplications;
