import React, { ChangeEventHandler } from 'react';
import './ExpenseFilter.css';

type Props = {
  year: string;
  onSelect: (year: string) => void;
}

export const ExpensesFilter: React.FC<Props> = ({ year, onSelect }) => {

  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    onSelect(e.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={year} onChange={handleSelect}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};