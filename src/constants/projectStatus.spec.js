import PROJECT_STATUS from './projectStatus';

describe('Constants: projectStatus', () => {
  it('should match the snapshot', () => {
    expect(PROJECT_STATUS).toMatchSnapshot();
  });
});
