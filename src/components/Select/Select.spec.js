import React from 'react';
import renderer from 'react-test-renderer';

import Select from './Select';

describe('Components: Select', () => {
  it('it should match the snapshot [default]', () => {
    const tree = renderer.create(<Select />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should match the snapshot [hasError]', () => {
    const tree = renderer.create(<Select hasError />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
