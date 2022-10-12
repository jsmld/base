import React, { useState } from 'react';
import './Expenses.css'
import { ExpenseItem } from './ExpenseItem'
import { Card } from '../UI/Card'
import { ExpensesFilter } from './ExpenseFilter'
import { Expense } from '../..';


export const Expenses: React.FC<{expenses: Expense[]}> = ({ expenses }) => {

  const [year, setYear] = useState('2022')
  const handleFilter = (selectedYear: string) => {
    setYear(selectedYear);
  }
  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === year)

  let expensesContent = <p style={{color: '#FFF', paddingLeft: '15px'}}>No expenses found.</p>
  if (filteredExpenses.length > 0) {
    //@ts-ignore need to fix this
    expensesContent = filteredExpenses.map(({ title, amount, date, id }) => (
      <ExpenseItem key={id} title={title} amount={amount} date={date} />
    ))
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter year={year} onSelect={handleFilter} />
      {expensesContent}
    </Card>
  )
}