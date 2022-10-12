import './style.css'
import { useState } from 'react';
import { ExpenseItem } from './ExpenseItem'
import { Card } from '../UI/Card'
import { ExpensesFilter } from './ExpenseFilter'

export const Expenses = ({ expenses }) => {

  const [year, setYear] = useState('2020')
  const handleFilter = (selectedYear) => {
    setYear(selectedYear);
  }
  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === year)

  return (
    <Card className='expenses'>
      <ExpensesFilter year={year} onSelect={handleFilter} />
      {filteredExpenses.map(({ title, amount, date, id }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </Card>
  )
}