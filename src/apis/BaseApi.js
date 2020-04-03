import axios from 'axios';

import { REQUEST_RESPONSE_STATUS, REQUEST_TIMEOUT } from '../constants/request';
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

  /**
   * Extract the data from the standardized response format
   * https://stackoverflow.com/questions/12806386/standard-json-api-response-format/12979961#12979961
   */
  extractData(response) {
    const { data: responseData = {} } = response;
    const { status, data, message } = responseData;

    if (status !== REQUEST_RESPONSE_STATUS.ERROR && status !== REQUEST_RESPONSE_STATUS.SUCCESS) {
      console.warn('API response status field not following the established format');
    }

    if (status === REQUEST_RESPONSE_STATUS.ERROR) {
      throw new Error(message || 'Something went wrong when extracting the data from the response');
    }

    return data;
  }

  async request(config) {
    try {
      const response = await this.instance.request(config);
      // console.info(`${config.method} request to ${config.url} responded with: `, response);

      return this.extractData(response);
    } catch (error) {
      const message = `${config.method} request to ${config.url} failed with: ${error.message}`;

      ToastService.showError(message);
      throw new RequestError(message);
    }
  }
}

export default BaseApi;
