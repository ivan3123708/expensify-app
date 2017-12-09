import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Return default filters state object', () => {
  const result = filtersReducer(undefined, { type: '@@INIT' });
  expect(result).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('Return filters state object with text set up', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const result = filtersReducer(currentState, { type: 'SET_TEXT', text: 'test_text' });
  expect(result.text).toBe('test_text');
});

test('Return filters state object with sortBy set to amount', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const result = filtersReducer(currentState, { type: 'SORT_BY_AMOUNT' });
  expect(result.sortBy).toBe('amount');
});

test('Return filters state object with sortBy set to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const result = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(result.sortBy).toBe('date');
});

test('Return filters state object with startDate set up', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const result = filtersReducer(currentState, { type: 'SET_START_DATE', startDate: moment(123000) });
  expect(result.startDate).toEqual(moment(123000));
});

test('Return filters state object with endDate set up', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const result = filtersReducer(currentState, { type: 'SET_END_DATE', endDate: moment(123000) });
  expect(result.endDate).toEqual(moment(123000));
});