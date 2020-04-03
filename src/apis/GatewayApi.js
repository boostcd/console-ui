import BaseApi from './BaseApi';

class GatewayApi extends BaseApi {
  getFeatures = async () => {
    return await this.request({
      method: 'GET',
      url: '/features',
    });
  };

  getMicroservice = async (environmentName, appName) => {
    return await this.request({
      method: 'GET',
      url: `/environment/${environmentName}/app/${appName}`,
    });
  };

  getMicroservices = async () => {
    return await this.request({
      method: 'GET',
      url: '/microservices',
    });
  };

  getProject = async (namespace) => {
    return await this.request({
      method: 'GET',
      url: `/project/${namespace}`,
    });
  };

  getProjects = async () => {
    return await this.request({
      method: 'GET',
      url: '/projects',
    });
  };

  createProject = async (data) => {
    return await this.request({
      method: 'POST',
      url: `/project`,
      data,
    });
  };

  editProject = async (namespace, data) => {
    return await this.request({
      method: 'PUT',
      url: `/project/${namespace}`,
      data,
    });
  };

  deleteProject = async (namespace) => {
    return await this.request({
      method: 'DELETE',
      url: `/project/${namespace}`,
    });
  };

  getUsers = async () => {
    return await this.request({
      method: 'GET',
      url: '/users',
    });
  };

  getLibraries = async () => {
    return await this.request({
      method: 'GET',
      url: '/libraries',
    });
  };

  releaseLibrary = async (name) => {
    return await this.request({
      method: 'POST',
      url: ` /library/${name}/release`,
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
}

export default new GatewayApi(GATEWAY_API_SERVICE_URI);
