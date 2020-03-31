import { shallow } from 'enzyme';
import React from 'react';

import Button from '../Button/Button';
import PageHeading from './PageHeading';
import * as Styles from './PageHeading.styled';

describe('Components: PageHeading', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PageHeading title='' />);
  });

  it('should render the wrapper', () => {
    expect(wrapper.find(Styles.Wrapper)).toHaveLength(1);
  });

  it('should render the passed title', () => {
    const title = 'Example title';
    wrapper.setProps({ title });
    expect(wrapper.find('h2').text()).toBe(title);
  });

  it('should not render actions by default', () => {
    expect(wrapper.find(Styles.Actions)).toHaveLength(0);
  });

  it('should render the passed actions', () => {
    const children = <Button variant='primary'>Sample button</Button>;
    wrapper.setProps({ children });
    expect(wrapper.find(Styles.Actions).contains(children)).toBe(true);
  });
});
