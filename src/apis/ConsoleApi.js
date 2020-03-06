import stall from '../utils/stall';
import microservices from './mocks/microservices.json';

class ConsoleApi {
  // TODO: Temporary mocked the microservices endpoint
  async getMicroservices() {
    await stall(3000);
    return microservices;
  }
}

export default ConsoleApi;
