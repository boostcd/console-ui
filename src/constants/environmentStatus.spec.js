import ENVIRONMENT_STATUS from './environmentStatus';

describe('Constants: environmentStatus', () => {
  it('should match the snapshot', () => {
    expect(ENVIRONMENT_STATUS).toMatchSnapshot();
  });
});
