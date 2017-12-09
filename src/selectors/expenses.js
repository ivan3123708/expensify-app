import moment from 'moment';

const getFilteredExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createdAt), 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createdAt), 'day') : true;
    const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') return a.createdAt < b.createdAt;
    if (sortBy === 'amount') return a.amount < b.amount;
  });
}

export default getFilteredExpenses;