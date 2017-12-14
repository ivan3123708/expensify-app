import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Render ExpensesSummary with single expense', () => {
  const result = shallow(<ExpensesSummary count={1} sum={150} />);
  expect(result).toMatchSnapshot();
});

test('Render ExpensesSummary with multiple expenses', () => {
  const result = shallow(<ExpensesSummary count={4} sum={1800000} />);
  expect(result).toMatchSnapshot();
});