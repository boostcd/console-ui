import axios from 'axios';
import { toast } from 'react-toastify';

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
      console.info(`${config.method} request to ${config.url} responded with: `, response);
      return response.data;
    } catch (error) {
      const message = `${config.method} request to ${config.url} failed with: ${error.message}`;
      toast.error(message);
      throw new RequestError(message);
    }
  }
}

export default BaseApi;
