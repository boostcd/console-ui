import { Box } from '@rebass/grid';
import styled from 'styled-components';

/**
 * The purpose of this component wrapping around the Box grid component is
 * to have a fixed width grid of elements for features/microservices views
 */
export default styled(Box)`
  min-width: 240px;
`;
