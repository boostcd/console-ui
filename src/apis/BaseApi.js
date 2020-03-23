import axios from 'axios';

import { REQUEST_TIMEOUT } from '../constants';
import RequestError from '../utils/RequestError';
import ToastService from '../utils/ToastService';

class BaseApi {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      // Set default request timeout to 10 seconds
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
      // console.info(`${config.method} request to ${config.url} responded with: `, response);
      return response.data;
    } catch (error) {
      const message = `${config.method} request to ${config.url} failed with: ${error.message}`;

      ToastService.showError(message);
      throw new RequestError(message);
    }
  }
}

export default BaseApi;
