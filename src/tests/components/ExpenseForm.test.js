import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Render expense form', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('Render expense form with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('Render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('Render expense form with description set', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', { target: { value: 'New description' } });
  expect(wrapper.state('description')).toBe('New description');
});

test('Render expense form with note set', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', { target: { value: 'New note' } });
  expect(wrapper.state('note')).toBe('New note');
});

test('Render expense form with valid amount set', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', { target: { value: '25.50' } });
  expect(wrapper.state('amount')).toBe('25.50');
});

test('Render expense form with invalid amount set', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', { target: { value: '25.505' } });
  expect(wrapper.state('amount')).toBe('');
});

test('Render expense form onSubmit with valid data', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

test('Render expense form with new date set', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(moment());
  expect(wrapper.state('createdAt')).toEqual(moment());
});

test('Render expense form with calender focus set', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: true });
  expect(wrapper.state('focused')).toEqual(true);
});