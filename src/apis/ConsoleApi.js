import mock from './mock.json';

async function stall(time) {
  await new Promise((resolve) => setTimeout(resolve, time));
}

class ConsoleApi {
  // TODO: Temporary mocked the microservices endpoint
  async getMicroservices() {
    await stall(3000);
    return mock;
  }
}

export default new ConsoleApi();
