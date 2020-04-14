import { Box } from '@rebass/grid';
import styled from 'styled-components';

/**
 * The purpose of this component wrapping around the Box grid component is
 * to have a fixed width grid of elements for features/microservices views
 * Using !important to overwrite the default min-width from @rebass/grid
 */
export default styled(Box)`
  max-width: 240px;
  min-width: 240px !important;
`;
