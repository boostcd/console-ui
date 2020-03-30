import React from 'react';
import renderer from 'react-test-renderer';

import FixedWidthBox from './FixedWidthBox';

describe('Components: FixedWidthBox', () => {
  it('it should match the snapshot', () => {
    const tree = renderer.create(<FixedWidthBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
