import RequestError from './RequestError';

describe('Utils: RequestError', () => {
  it('should be instance of Error', () => {
    const error = new RequestError();
    expect(error).toBeInstanceOf(Error);
  });

  it('should have a name attribute', () => {
    const error = new RequestError();
    expect(error.name).toBe('RequestError');
  });

  it('should have a message attribute', () => {
    const message = 'Request failed with 500 status code!';
    const error = new RequestError(message);
    expect(error.message).toBe(message);
  });
});
