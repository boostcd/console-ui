import BaseApi from './BaseApi';
import mockMicroservice from './mocks/microservice.json';
import mockProjects from './mocks/projects.json';

class GatewayApi extends BaseApi {
  getMicroservice = async () => {
    return mockMicroservice;

    // TODO: Un-mock when implemented
    // (environmentName, appName)
    // return await this.request({
    //   method: 'GET',
    //   url: `/environment/${environmentName}/app/${appName}`,
    // });
  };

  getMicroservices = async () => {
    return await this.request({
      method: 'GET',
      url: '/microservices',
    });
  };

  getFeatures = async () => {
    return await this.request({
      method: 'GET',
      url: '/features',
    });
  };

  build = async (environment, service) => {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/app/${service}/build`,
    });
  };

  buildAll = async (environment) => {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/build`,
    });
  };

  test = async (environment, service) => {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/app/${service}/test`,
    });
  };

  testAll = async (environment) => {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/test`,
    });
  };

  promote = async (environment, service) => {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/app/${service}/promote`,
    });
  };

  promoteAll = async (environment) => {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/promote`,
    });
  };

  goLive = async (environment) => {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/go-live`,
    });
  };

  backOut = async (environment) => {
    return await this.request({
      method: 'POST',
      url: `/environment/${environment}/back-out`,
    });
  };

  getProjects = async () => {
    return mockProjects;

    // return await this.request({
    //   method: 'GET',
    //   url: '/projects',
    // });
  };
}

export default new GatewayApi(GATEWAY_API_SERVICE_URI);
