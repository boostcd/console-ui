import BaseApi from './BaseApi';

class BuildApi extends BaseApi {
  async buildAll() {
    return await this.request({
      method: 'POST',
      url: '/build/apps',
    });
  }

  async releaseAll() {
    return await this.request({
      method: 'POST',
      url: '/release/apps',
    });
  }
}

export default new BuildApi(
  window.boost.BUILD_API_SERVICE_URI || process.env.BUILD_API_SERVICE_URI
);
