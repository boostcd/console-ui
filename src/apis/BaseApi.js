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
  extractData(responseData) {
    const { status, data, message } = responseData;

    if (status !== REQUEST_RESPONSE_STATUS.SUCCESS && status !== REQUEST_RESPONSE_STATUS.ERROR) {
      throw new Error('API: Response status not following the established format!');
    }

    if (status === REQUEST_RESPONSE_STATUS.ERROR) {
      throw new Error(message || 'API: Response error message not defined!');
    }

    return data;
  }

  async request(config) {
    try {
      const response = await this.instance.request(config);
      // console.info(`${config.method} request to ${config.url} responded with: `, response);

      // Throw an error if the Content-Type header is not JSON
      const { data, headers } = response;
      const { 'content-type': contentType } = headers;

      if (!contentType || contentType.indexOf('application/json') === -1) {
        throw new RequestError('API: Content-Type header is not application/json!');
      }

      return this.extractData(data);
    } catch (error) {
      const message = `${config.method} request to ${config.url} failed with: ${error.message}`;

      ToastService.error(message);
      throw new RequestError(message);
    }
  }
}

export default BaseApi;
