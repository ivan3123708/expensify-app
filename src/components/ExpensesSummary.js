import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { getFilteredExpenses, getSummedExpenses } from '../selectors/expenses';

export const ExpensesSummary = (props) => {
  const singular_plural = props.count === 1 ? 'expense' : 'expenses';
  return (
    <div>
      <p>Viewing {props.count} {singular_plural} totalling {numeral(props.sum / 100).format('$0,0.00')}</p>
    </div>
  )
};

const mapStateToProps = (state) => ({
  count: getFilteredExpenses(state.expenses, state.filters).length,
  sum: getSummedExpenses(getFilteredExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);