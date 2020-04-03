import MockDate from './MockDate';

describe('Utils: MockDate', () => {
  it('should be instance of Date', () => {
    const date = new MockDate();
    expect(date).toBeInstanceOf(Date);
  });

  it('should be a fixed date', () => {
    expect(new MockDate()).toEqual(new Date('2020-02-24T00:00:00'));
  });
});
