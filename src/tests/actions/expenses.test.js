import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, removeExpense, editExpense, startAddExpense } from '../../actions/expenses';
import db from '../../firebase/firebase';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

test('Return correct object to add', () => {
  const result = addExpense(expenses[2]);
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('Add expense to database and store', (done) => {
  const store = createMockStore({});

  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'fuck off',
    createdAt: 11000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return db.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
  });
  done();
});

test('Add default expense to database and store', (done) => {
  const store = createMockStore({});

  const defaultExpenseData = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultExpenseData
      }
    });

    return db.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultExpenseData);
  });
  done();
});

// test('Return correct default object to add', () => {
//   const result = addExpense();
//   expect(result).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });

test('Return correct object to remove', () => {
  const result = removeExpense('test_id');
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'test_id'
  });
});

test('Return correct object to edit', () => {
  const result = editExpense('test_id', {descrition: 'test_description', amount: 123});
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'test_id',
    updates: {
      descrition: 'test_description',
      amount: 123
    }
  });
});