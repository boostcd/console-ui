import axios from 'axios';

// Set default request timeout to 15 seconds
axios.defaults.timeout = 15000;

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
      console.error(`API: ${config.method} Request @ ${config.url} failed with: `, error);
    }
  }
}

export default BaseApi;
