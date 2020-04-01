import { shallow } from 'enzyme';
import React from 'react';

import LastUpdated from './LastUpdated';
import * as Styles from './LastUpdated.styled';

describe('Components: LastUpdated', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LastUpdated date={new Date()} loading={false} />);
  });

  it('should render the wrapper', () => {
    expect(wrapper.find(Styles.Wrapper)).toHaveLength(1);
  });

  it('should not render a spinner icon [loading=false]', () => {
    wrapper.setProps({ loading: false });
    expect(wrapper.find(Styles.SpinnerIcon)).toHaveLength(0);
  });

  it('should render a spinner icon [loading=true]', () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.find(Styles.SpinnerIcon)).toHaveLength(1);
  });

  it('should render the passed date', () => {
    const date = new Date();
    wrapper.setProps({ date });

    expect(wrapper.find('span').text()).toBe(`Last updated: ${date.toLocaleString()}`);
  });
});
