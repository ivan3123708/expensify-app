import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />);
});

test('Render ExpenseListFilters', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Render ExpenseListFilters with altFilters', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('Render ExpenseListFilters with setTextChange', () => {
  wrapper.find('input').simulate('change', {target: {value: 'rent'}});
  expect(setTextFilter).toHaveBeenLastCalledWith('rent');
});

test('Render ExpenseListFilters with sortByDate', () => {
  wrapper.find('select').simulate('change', {target: {value: 'date'}});
  expect(sortByDate).toHaveBeenCalled();
});

test('Render ExpenseListFilters with sortByAmount', () => {
  wrapper.find('select').simulate('change', { target: { value: 'amount' } });
  expect(sortByAmount).toHaveBeenCalled();
});

test('Render ExpenseListFilters with setStartDate and setEndDate', () => {
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate: moment(0).add(1, 'years'), endDate: moment(0).add(2, 'years') });
  expect(setStartDate).toHaveBeenLastCalledWith(moment(0).add(1, 'years'));
  expect(setEndDate).toHaveBeenLastCalledWith(moment(0).add(2, 'years'));
});

test('Render ExpenseListFilters with date focus change', () => {
  wrapper.find('DateRangePicker').prop('onFocusChange')('endDate');
  expect(wrapper.state('focusedInput')).toBe('endDate');
});