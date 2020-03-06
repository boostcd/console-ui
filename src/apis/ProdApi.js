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

export default ProdApi;
