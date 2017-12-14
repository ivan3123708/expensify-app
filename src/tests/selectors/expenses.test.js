import moment from 'moment';
import { getFilteredExpenses, getSummedExpenses } from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

// test getFilteredExpenses function

test('Return object filtered by text', () => {
  const filter = {
    text: 'h',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = getFilteredExpenses(expenses, filter);
  expect(result).toEqual([ expenses[2], expenses[1] ]);
});

test('Return object filtered by start date', () => {
  const filter = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = getFilteredExpenses(expenses, filter);
  expect(result).toEqual([ expenses[2], expenses[0] ]);
});

test('Return object filtered by end date', () => {
  const filter = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };
  const result = getFilteredExpenses(expenses, filter);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('Return object sorted by amount', () => {
  const filter = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = getFilteredExpenses(expenses, filter);
  expect(result).toEqual([ expenses[0], expenses[2], expenses[1] ]);
});

test('Return object sorted by date', () => {
  const filter = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = getFilteredExpenses(expenses, filter);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

// test getSummedExpenses

test('Return sum when no expenses provided', () => {
  const result = getSummedExpenses();
  expect(result).toBe(0);
});

test('Return sum when one expense provided', () => {
  const result = getSummedExpenses([expenses[0]]);
  expect(result).toBe(50000);
});

test('Return sum when multiple expenses provided', () => {
  const result = getSummedExpenses(expenses);
  expect(result).toBe(90000);
});