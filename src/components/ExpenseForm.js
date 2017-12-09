import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const now = moment().format('DD MMM YYYY');
console.log(now);

export default class ExpenseForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      note: props.expense ? props.expense.note : '',
      focused: false,
      error: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description: description}))
  }

  onAmountChange = (e) => {
    const amount = e.target.value;

  if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount: amount}))
    }
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note: note}))
  }

  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({createdAt: createdAt}));
    }
  }

  onFocusChange = ({focused}) => {
    this.setState(() => ({focused: focused}));
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({error: 'Please enter description and amount.'}));
    } else {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea 
            placeholder="Add note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}