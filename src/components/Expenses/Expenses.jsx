import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
  const [filter, setFilter] = useState('2021')

  const handleSelectYear = (year) => {
    setFilter(year)
  }

  const filteredExpenses = props.items.filter(el => {
    return el.date.getFullYear().toString() === filter
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filter} handleSelectYear={handleSelectYear} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
