import isEnvironmentUntested from './isEnvironmentUntested';

describe('Utils: isEnvironmentUntested', () => {
  it('it should return true', () => {
    expect(
      isEnvironmentUntested({
        testStatus: 'Untested',
      })
    ).toBe(true);
  });

  it('it should return false', () => {
    expect(
      isEnvironmentUntested({
        testStatus: 'Something',
      })
    ).toBe(false);
  });
});
