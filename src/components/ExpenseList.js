import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getFilteredExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    <h3>Expense List</h3>
    {props.expenses.length > 0 ? (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense}/>
      })) : (
        <p>No expenses</p>
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getFilteredExpenses(state.expenses, state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseList);