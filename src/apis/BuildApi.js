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

export default BuildApi;
