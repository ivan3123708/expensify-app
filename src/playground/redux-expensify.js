import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// EXPENSE ACTION GENERATORS

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description: description,
    note: note,
    amount: amount,
    createdAt: createdAt
  }
});

const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates
});

// FILTER ACTION GENERATORS

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

// REDUCERS

const defaultStateExpenses = [];

const expensesReducer = (state = defaultStateExpenses, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => expense.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {...expense, ...action.updates};
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const defaultStateFilters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = defaultStateFilters, action) => {
  switch(action.type) {
    case 'SET_TEXT':
      return {...state, text: action.text};
    case 'SORT_BY_AMOUNT':
      return {...state, sortBy: 'amount'};
    case 'SORT_BY_DATE':
      return {...state, sortBy: 'date'};
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
    default:
      return state
  }
};

// SHOW FILTERED DATA

const getFilteredExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date') return a.createdAt < b.createdAt;
    if(sortBy === 'amount') return a.amount < b.amount;
  });
}

// STORE

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const filteredExpenses = getFilteredExpenses(state.expenses, state.filters);
  console.log(filteredExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Whores', amount: 500, createdAt: 1100}));
const expenseThree = store.dispatch(addExpense({ description: 'Drugs', amount: 50, createdAt: 1300 }));
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 3000}));

// store.dispatch(setTextFilter('whores'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(500));
// store.dispatch(setEndDate(1010));

// JUST AN EXAMPLE OF HOW STATE SHOULD LOOK

const demoState = {
  expenses: [{
    id: 'rent1',
    description: 'January rent',
    note: 'Very big rent maaan',
    amount: 25000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};