import BaseApi from './BaseApi';

class BuildApi extends BaseApi {
  buildAll = async () => {
    return await this.request({
      method: 'POST',
      url: '/build/apps',
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
