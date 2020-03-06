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

export default new ProdApi(process.env.PROD_API_SERVICE_URI || window.boost.PROD_API_SERVICE_URI);
