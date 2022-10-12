import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import './ExpenseForm.css';
import { Expense } from '../../index';

type Props = {
  onSaveExpenseData: (expense: Partial<Expense>) => void;
}

export const ExpenseForm: React.FC<Props> = ({ onSaveExpenseData }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEnteredTitle(event.target.value)
  };
  const amountChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEnteredAmount(event.target.value)
  };
  const dateChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEnteredDate(event.target.value)
  };

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();

    const expenseData: Partial<Expense> = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" min={0.01} step={0.01} value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31 " value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}