import mockFeatures from '../examples/features.json';
import mockLibraries from '../examples/libraries.json';
import mockMicroservice from '../examples/microservice.json';
import mockMicroservices from '../examples/microservices.json';
import mockProject from '../examples/project.json';
import mockProjects from '../examples/projects.json';
import mockUsers from '../examples/users.json';

/**
 * This is a mock used for testing the API
 */
class GatewayApi {
  getFeatures = () => mockFeatures;

  getMicroservice = () => mockMicroservice;
  getMicroservices = () => mockMicroservices;

  getProject = () => mockProject;
  getProjects = () => mockProjects;

  getUsers = () => mockUsers;

  getLibraries = () => mockLibraries;
}

export default new GatewayApi();
