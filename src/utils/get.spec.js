import get from './get';

describe('Utils: get', () => {
  const obj = {
    foo: {
      bar: 'bar',
    },
    test: {
      a: {
        b: {
          c: 'd',
        },
      },
    },
  };

  it('should throw an invariant error', () => {
    expect(() => {
      get();
    }).toThrow('Invariant failed: Missing argument: obj!');
  });

  it('should throw an invariant error', () => {
    expect(() => {
      get({});
    }).toThrow('Invariant failed: Missing argument: path!');
  });

  it('should return the default value [no match]', () => {
    const defaultValue = 'Value is undefined';
    expect(get(obj, 'missing.key', defaultValue)).toBe(defaultValue);
  });

  it('should return the values [string path]', () => {
    expect(get(obj, 'foo.bar')).toBe(obj.foo.bar);
    expect(get(obj, 'test.a')).toBe(obj.test.a);
    expect(get(obj, 'test.a.b.c')).toBe(obj.test.a.b.c);
  });

  it('should return the values [array path]', () => {
    expect(get(obj, ['foo', 'bar'])).toBe(obj.foo.bar);
    expect(get(obj, ['test', 'a'])).toBe(obj.test.a);
    expect(get(obj, ['test', 'a', 'b', 'c'])).toBe(obj.test.a.b.c);
  });
});
