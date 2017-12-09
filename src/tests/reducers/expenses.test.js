import uuid from 'uuid';
import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Return default expenses state object', () => {
  const result = expensesReducer(undefined, { type: '@@INIT' });
  expect(result).toEqual([]);
});

test('Return expense state object with expense added', () => {
  const expense = {
    id: uuid(),
    description: 'Cocaine',
    note: 'some drugs',
    amount: 250.00,
    createdAt: moment(123000)
  }
  const result = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense: expense });
  expect(result).toEqual([...expenses, expense]);
})

test('Return expenses state object with expense removed', () => {
  const result = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: 2 });
  expect(result).toEqual([ expenses[0], expenses[2] ]);
});

test('Return expenses state object with expense edited', () => {
  const updates = {
    amount: 500,
    note: 'mora smanjim malo tebra'
  }
  const result = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: 3, updates: updates });
  expect(result[2]).toEqual({...result[2], ...updates});
});