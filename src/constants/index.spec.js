import {
  DEBOUNCE_DELAY,
  POLLING_DELAY,
  REQUEST_TIMEOUT,
  TOAST_CONFIG,
  TOAST_MAX_VISIBLE,
} from './index';

describe('Constants', () => {
  it('should have the REQUEST_TIMEOUT defined', () => {
    expect(REQUEST_TIMEOUT).toBeDefined();
    expect(typeof REQUEST_TIMEOUT).toBe('number');
  });

  it('should have the DEBOUNCE_DELAY defined', () => {
    expect(DEBOUNCE_DELAY).toBeDefined();
    expect(typeof DEBOUNCE_DELAY).toBe('number');
  });

  it('should have the POLLING_DELAY defined', () => {
    expect(POLLING_DELAY).toBeDefined();
    expect(typeof POLLING_DELAY).toBe('number');
  });

  it('should match the snapshot - TOAST_CONFIG', () => {
    expect(TOAST_CONFIG).toMatchSnapshot();
  });

  it('should have the TOAST_MAX_VISIBLE defined', () => {
    expect(TOAST_MAX_VISIBLE).toBeDefined();
    expect(typeof TOAST_MAX_VISIBLE).toBe('number');
  });
});
