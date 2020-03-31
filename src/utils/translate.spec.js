import t from './translate';

describe('Utils: translate', () => {
  it('should throw an invariant error [key=undefined]', () => {
    expect(() => {
      t();
    }).toThrow(/^Missing key parameter!$/);
  });

  it('should return the default value [no match]', () => {
    expect(t('missing.key')).toBe('Missing translation for key: missing.key');
  });

  it('should return the text', () => {
    expect(t('test.simple')).toBe('Simple example without params');
  });

  it('should return the text with the passed params [plain]', () => {
    const params = {
      firstValue: 'foo',
      secondValue: 'bar',
    };

    expect(t('test.withParams', params)).toBe(
      `Example with params: ${params.firstValue} ${params.secondValue}`
    );
  });

  it('should return the text with the passed params [functions]', () => {
    const params = {
      firstValue: (prop) => `test:${prop}`,
      secondValue: (_prop, params) => Object.keys(params).length,
    };

    expect(t('test.withParams', params)).toBe(`Example with params: test:firstValue 2`);
  });
});
