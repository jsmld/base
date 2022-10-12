import React from 'react';
import { Expense } from '../..';
import { ExpenseForm } from './ExpenseForm';
import './NewExpense.css';

type Props = {
  onAddExpense: (expense: Expense) => void;
}

export const NewExpense: React.FC<Props> = ({ onAddExpense }) => {
  const saveExpenseData = (enteredExpenseData: Partial<Expense>) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    //@ts-ignore  need to fix this type
    onAddExpense(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  )
}