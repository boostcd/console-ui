import { shallow } from 'enzyme';
import React from 'react';

import ConfirmToast from './ConfirmToast';
import * as Styles from './ConfirmToast.styled';

describe('Components: ConfirmToast', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ConfirmToast onConfirm={noop} onCancel={noop}>
        children here
      </ConfirmToast>
    );
  });

  it('should render the wrapper', () => {
    expect(wrapper.find(Styles.Wrapper)).toHaveLength(1);
  });

  it('should render the passed children', () => {
    const children = <h4>Are you sure you want to continue?</h4>;
    wrapper.setProps({ children });
    expect(wrapper.find('div').contains(children)).toBe(true);
  });

  it('should render the buttons section', () => {
    expect(wrapper.find(Styles.Buttons)).toHaveLength(1);
  });

  it('should handle clicks on the confirm button', () => {
    const onConfirm = jest.fn();
    wrapper.setProps({ onConfirm });

    const button = wrapper.find('Button[variant="primary"]');
    button.simulate('click');

    expect(button.text()).toBe('Confirm');
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it('should handle clicks on the cancel button', () => {
    const onCancel = jest.fn();
    wrapper.setProps({ onCancel });

    const button = wrapper.find('Button[variant="secondary"]');
    button.simulate('click');

    expect(button.text()).toBe('Cancel');
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
