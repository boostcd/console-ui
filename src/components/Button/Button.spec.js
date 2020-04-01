import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('Components: Button', () => {
  it('it should match the snapshot [primary]', () => {
    const tree = renderer.create(<Button variant='primary'>Primary button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should match the snapshot [secondary]', () => {
    const tree = renderer.create(<Button variant='secondary'>Secondary button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should match the snapshot [preventEvents]', () => {
    const tree = renderer
      .create(
        <Button variant='primary' preventEvents>
          Primary button with disabled events
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should match the snapshot [isDisabled]', () => {
    const tree = renderer.create(<Button isDisabled>Disabled button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
