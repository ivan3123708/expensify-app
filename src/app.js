import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore.js';
import { addExpense, removeExpense } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getFilteredExpenses from './selectors/expenses.js';
import 'normalize.css/normalize.css'
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const filteredExpenses = getFilteredExpenses(state.expenses, state.filters);
  console.log(filteredExpenses);
});

store.dispatch(addExpense({description: 'Drugs', amount: 1200}));
store.dispatch(addExpense({ description: 'Whores', amount: 5300 }));
store.dispatch(addExpense({ description: 'Alcohol', createdAt: 1000 }));

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));