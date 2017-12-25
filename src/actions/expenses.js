import uuid from 'uuid';
import db from '../firebase/firebase';

const addExpense = (expense = {}) => ({
  type: 'ADD_EXPENSE',
  expense: expense
});

const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {

    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = {
      description: description,
      note: note,
      amount: amount,
      createdAt: createdAt
    };

    return db.ref('expenses').push(expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      });
  }
}

const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates
});

export { addExpense, removeExpense, editExpense, startAddExpense };