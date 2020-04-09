import React from 'react';
import renderer from 'react-test-renderer';

import Input from './Input';

describe('Components: Input', () => {
  it('it should match the snapshot [default]', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should match the snapshot [readonly]', () => {
    const tree = renderer.create(<Input readOnly />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should match the snapshot [hasError]', () => {
    const tree = renderer.create(<Input hasError />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
