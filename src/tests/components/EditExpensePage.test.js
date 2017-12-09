import React from 'react';
import { shallow } from 'enzyme';
import { Edit } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<Edit expense={expenses[0]} editExpense={editExpense} removeExpense={removeExpense} history={history} />);
})

test('Render EditExpense', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Render EditExpense with onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('Render EditExpense with onClick', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id);
});