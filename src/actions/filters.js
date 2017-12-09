const setTextFilter = (text = '') => ({
  type: 'SET_TEXT',
  text: text
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate: startDate
});

const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate: endDate
});

export { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate };