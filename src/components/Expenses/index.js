import './style.css'
import { useState } from 'react';
import { ExpenseItem } from './ExpenseItem'
import { Card } from '../UI/Card'
import { ExpensesFilter } from './ExpenseFilter'

export const Expenses = ({ expenses }) => {

  const [year, setYear] = useState('')
  const handleFilter = (selectedYear) => {
    setYear(selectedYear);
  }
  return (
    <Card className='expenses'>
      <ExpensesFilter year={year} onSelect={handleFilter} />
      {expenses.map(({ title, amount, date }) => (
        <ExpenseItem title={title} amount={amount} date={date} />
      ))}
    </Card>
  )
}