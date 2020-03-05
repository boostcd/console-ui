import BaseApi from './BaseApi';

class ProdApi extends BaseApi {
  async runTests() {
    return await this.request({
      method: 'POST',
      url: '/tests',
    });
  }

  async promoteLive() {
    return await this.request({
      method: 'POST',
      url: '/promoteToLive',
    });
  }
}

export default new ProdApi(window.boost.PROD_API_SERVICE_URI || process.env.PROD_API_SERVICE_URI);
