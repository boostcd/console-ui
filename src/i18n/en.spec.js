import en from './en';

describe('i18n: EN', () => {
  it('should match the snapshot', () => {
    expect(en).toMatchSnapshot();
  });
});
