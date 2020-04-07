import axios from 'axios';

import { REQUEST_TIMEOUT } from '../constants';
import RequestError from '../utils/RequestError';
import ToastService from '../utils/ToastService';

/**
 * Base API class wrapping around the axios library
 */
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

      // Throw an error if the Content-Type header is not JSON
      const { data, headers } = response;
      const { 'content-type': contentType } = headers;

      if (contentType !== 'application/json') {
        throw new RequestError('Content-Type header is not application/json!');
      }

      return data;
    } catch (error) {
      const message = `${config.method} request to ${config.url} failed with: ${error.message}`;

      ToastService.showError(message);
      throw new RequestError(message);
    }
  }
}

export default BaseApi;
