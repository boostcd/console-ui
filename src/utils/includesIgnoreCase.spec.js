import includesIgnoreCase from './includesIgnoreCase';

describe('Utils: includesIgnoreCase', () => {
  it('should return false', () => {
    expect(includesIgnoreCase()).toBe(false);
  });

  it('should return false', () => {
    expect(includesIgnoreCase('my test string')).toBe(false);
  });

  it('should return false', () => {
    expect(includesIgnoreCase('my test string', 'nah')).toBe(false);
  });

  it('should return false', () => {
    expect(includesIgnoreCase('my test string', '123')).toBe(false);
  });

  it('should return true', () => {
    expect(includesIgnoreCase('my test string', 'test')).toBe(true);
  });

  it('should return true', () => {
    expect(includesIgnoreCase('my test string', 'TEST')).toBe(true);
  });

  it('should return true', () => {
    expect(includesIgnoreCase('LoRem iPsum LoRem iPsum', 'ipsum')).toBe(true);
  });

  it('should return true', () => {
    expect(includesIgnoreCase('LoRem iPsum LoRem iPsum', 'LOREM')).toBe(true);
  });
});
