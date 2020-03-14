import axios from 'axios';

import { REQUEST_TIMEOUT } from '../constants';
import RequestError from '../utils/RequestError';

class BaseApi {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      // Set default request timeout to 15 seconds
      timeout: REQUEST_TIMEOUT,
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
