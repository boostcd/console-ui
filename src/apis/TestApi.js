import BaseApi from './BaseApi';

class TestApi extends BaseApi {
  runTests = async () => {
    return await this.request({
      method: 'POST',
      url: '/tests',
    });
  };

  promote = async (appName) => {
    return await this.request({
      method: 'POST',
      url: `promote/app/${appName}`,
    });
  };

  promoteAll = async () => {
    return await this.request({
      method: 'POST',
      url: '/promote/apps',
    });
  };
}

export default new TestApi(TEST_API_SERVICE_URI);
