import BaseApi from './BaseApi';

class ProdApi extends BaseApi {
  runTests = async () => {
    return await this.request({
      method: 'POST',
      url: '/tests',
    });
  };

  promoteLive = async () => {
    return await this.request({
      method: 'POST',
      url: '/promoteToLive',
    });
  };
}

export default new ProdApi(PROD_API_SERVICE_URI);
