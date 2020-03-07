import BaseApi from './BaseApi';

class BuildApi extends BaseApi {
  build = async (appName) => {
    return await this.request({
      method: 'POST',
      url: `build/app/${appName}`,
    });
  };

  buildAll = async () => {
    return await this.request({
      method: 'POST',
      url: '/build/apps',
    });
  };

  release = async (appName) => {
    return await this.request({
      method: 'POST',
      url: `release/app/${appName}`,
    });
  };

  releaseAll = async () => {
    return await this.request({
      method: 'POST',
      url: '/release/apps',
    });
  };
}

export default new BuildApi(
  process.env.BUILD_API_SERVICE_URI || window.boost.BUILD_API_SERVICE_URI
);
