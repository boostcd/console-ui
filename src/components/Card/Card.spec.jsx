import React from 'react';
import renderer from 'react-test-renderer';

import Card from './Card';

describe('Components: Card', () => {
  it('it should match the snapshot', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should match the snapshot when active', () => {
    const tree = renderer.create(<Card isActive />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
