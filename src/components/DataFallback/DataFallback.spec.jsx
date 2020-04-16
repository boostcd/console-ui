import { shallow } from 'enzyme';
import React from 'react';

import DataFallback from './DataFallback';
import * as Styles from './DataFallback.styled';

describe('Components: DataFallback', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DataFallback title='' />);
  });

  it('should render the wrapper', () => {
    expect(wrapper.find(Styles.Wrapper)).toHaveLength(1);
  });

  it('should render the passed title', () => {
    const title = 'Example title';
    wrapper.setProps({ title });
    expect(wrapper.find(Styles.Title).text()).toBe(title);
  });
});
