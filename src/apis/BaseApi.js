import axios from 'axios';

// TODO: Think of a better way to load the API urls
class BaseApi {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      headers: {
        common: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    });
  }

  async request(config) {
    try {
      const response = await this.instance.request(config);
      return response;
    } catch (error) {
      console.error('TODO: Error handling');
    }
  }
}

export default BaseApi;
