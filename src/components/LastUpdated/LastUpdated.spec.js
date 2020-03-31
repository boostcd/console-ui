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

  it('should not be in a loading state', () => {
    wrapper.setProps({ loading: false });
    expect(wrapper.find(Styles.Spinner)).toHaveLength(0);
  });

  it('should be in a loading state', () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.find(Styles.Spinner)).toHaveLength(1);
  });

  it('should render the passed date', () => {
    const date = new Date();
    wrapper.setProps({ date });

    expect(wrapper.find('span').text()).toBe(`Last updated: ${date.toLocaleString()}`);
  });
});
