import moment from 'moment';

const expenses = [
  {
    id: 1,
    description: 'Cocaine',
    amount: 50000,
    createdAt: 0,
    note: 'koks'
  },
  {
    id: 2,
    description: 'Alcohol',
    amount: 10000,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    note: 'pijenje'
  },
  {
    id: 3,
    description: 'Heroin',
    amount: 30000,
    createdAt: moment(0).add(4, 'days').valueOf(),
    note: 'hors'
  }
];

export default expenses;