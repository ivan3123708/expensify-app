import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const Dashboard = () => (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
);

export default Dashboard;