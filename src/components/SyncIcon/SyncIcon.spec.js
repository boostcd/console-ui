import React from 'react';
import renderer from 'react-test-renderer';

import SyncIcon from './SyncIcon';

describe('Components: SyncIcon', () => {
  it('it should match the snapshot', () => {
    const tree = renderer.create(<SyncIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
