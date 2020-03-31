import { shallow } from 'enzyme';
import React from 'react';

import Loader from './Loader';
import * as Styles from './Loader.styled';

describe('Components: Loader', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Loader />);
  });

  it('should render the wrapper', () => {
    expect(wrapper.find(Styles.Wrapper)).toHaveLength(1);
  });

  it('should render the spinner', () => {
    expect(wrapper.find(Styles.Spinner)).toHaveLength(1);
  });
});
