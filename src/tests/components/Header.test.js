import React from 'react';
/*
React Shallow Renderer - simpler version of Enzyme

import ReactShallowRenderer from 'react-test-renderer/shallow';
*/
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('Render Header component', () => {
  /*
  React Shallow Renderer example usage code

  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
  */

  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});