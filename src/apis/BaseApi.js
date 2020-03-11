import axios from 'axios';

// Set default request timeout to 15 seconds
axios.defaults.timeout = 15000;

class RequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RequestError';
    this.message = message;
  }
}

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
      console.info(`API: ${config.method} Request @ ${config.url} responded with: `, response);
      return response.data;
    } catch (error) {
      throw new RequestError(`API: ${config.method} Request @ ${config.url} failed with: `, error);
    }
  }
}

export default BaseApi;
