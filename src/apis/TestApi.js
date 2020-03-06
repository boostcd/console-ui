import BaseApi from './BaseApi';

class TestApi extends BaseApi {
  async runTests() {
    return await this.request({
      method: 'POST',
      url: '/tests',
    });
  }

  async promoteAll() {
    return await this.request({
      method: 'POST',
      url: '/promote/apps',
    });
  }
}

export default TestApi;
