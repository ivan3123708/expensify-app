import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Return correct object to add', () => {
  const result = addExpense({
    description: 'Something',
    note: 'some note',
    amount: 150.50,
    createdAt: 123000
  });
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: 'Something',
      note: 'some note',
      amount: 150.50,
      createdAt: 123000
    }
  });
});

test('Return correct default object to add', () => {
  const result = addExpense();
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});

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