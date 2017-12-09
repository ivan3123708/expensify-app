import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('Return default set text filter object', () => {
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT',
    text: ''
  });
});

test('Return set text filter object', () => {
  expect(setTextFilter('Drugs')).toEqual({
    type: 'SET_TEXT',
    text: 'Drugs'
  });
});

test('Return sort by amount filter object', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('Return sort by date filter object', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('Return start date filter object', () => {
  const result = setStartDate(moment(123000));
  expect(result).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(123000)
  });
});

test('Return end date filter object', () => {
  const result = setEndDate(moment(123000));
  expect(result).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(123000)
  });
});