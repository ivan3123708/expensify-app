import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({value = 9000} = {}) => ({
  type: 'SET',
  value: value
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.value
      }
    default:
      return state;
  }
  return state;
}

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 5}));

store.dispatch(setCount({value: 55}));

store.dispatch(setCount());