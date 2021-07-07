import { REQUEST_RESPONSE_STATUS, REQUEST_TIMEOUT } from './request';

describe('Constants: request', () => {
  it('should have the REQUEST_TIMEOUT defined', () => {
    expect(REQUEST_TIMEOUT).toBeDefined();
    expect(typeof REQUEST_TIMEOUT).toBe('number');
  });

  it('should match the snapshot - REQUEST_RESPONSE_STATUS', () => {
    expect(REQUEST_RESPONSE_STATUS).toMatchSnapshot();
  });
});
