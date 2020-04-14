import 'jest-styled-components';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Set process environment variable for the test mode
process.env.NODE_ENV = 'test';

// Set process environment variable for the timezone
process.env.TZ = 'UTC';

// Set other global variables used in the tests
global.noop = () => undefined;
global.__GLOBALS__ = {};

// Enzyme configuration
Enzyme.configure({ adapter: new Adapter() });
