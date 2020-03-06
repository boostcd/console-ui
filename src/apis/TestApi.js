import BaseApi from './BaseApi';

class TestApi extends BaseApi {
  runTests = async () => {
    return await this.request({
      method: 'POST',
      url: '/tests',
    });
  };

  promoteAll = async () => {
    return await this.request({
      method: 'POST',
      url: '/promote/apps',
    });
  };
}

export default new TestApi(process.env.TEST_API_SERVICE_URI || window.boost.TEST_API_SERVICE_URI);
