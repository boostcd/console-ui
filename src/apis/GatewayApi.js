import BaseApi from './BaseApi';
import mockMicroservice from './mocks/microservice.json';
import mockProjects from './mocks/projects.json';
import mockUsers from './mocks/users.json';

class GatewayApi extends BaseApi {
  getFeatures = async () => {
    return await this.request({
      method: 'GET',
      url: '/features',
    });
  };

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

  getProjects = async () => {
    return mockProjects;

    // return await this.request({
    //   method: 'GET',
    //   url: '/projects',
    // });
  };

  getProject = async (namespace) => {
    return await this.request({
      method: 'GET',
      url: `/project/${namespace}`,
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
    return mockUsers;

    // return await this.request({
    //   method: 'GET',
    //   url: '/users',
    // });
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
