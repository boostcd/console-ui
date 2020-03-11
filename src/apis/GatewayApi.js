import BaseApi from './BaseApi';
import microservices from './mocks/microservices.json';

class GatewayApi extends BaseApi {
  getMicroservices = async () => {
    return microservices;

    // return await this.request({
    //   method: 'GET',
    //   url: `/microservices`,
    // });
  };

  getFeatures = async () => {
    return await this.request({
      method: 'GET',
      url: `/features`,
    });
  };

  async build(environment, service) {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/app/${service}/build`,
    });
  }

  async buildAll(environment) {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/build`,
    });
  }

  /*
  async test(environment, service) {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/app/${service}/test`,
    });
  }
  */

  async testAll(environment) {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/test`,
    });
  }

  async promote(environment, service) {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/app/${service}/promote`,
    });
  }

  async promoteAll(environment) {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/promote`,
    });
  }

  async goLive(environment) {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/go-live`,
    });
  }

  async backOut(environment) {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/back-out`,
    });
  }
}

export default new GatewayApi(GATEWAY_API_SERVICE_URI);
