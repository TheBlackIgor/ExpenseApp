import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false)

  const onAddExpenseItem = newItem => {
    props.handleAddExpenses(newItem)
  }
  const handleChangeView = () => {
    showForm ? setShowForm(false) : setShowForm(true)
  }

  let content = <button onClick={handleChangeView}>Add new expense</button>

  if (showForm === true) {
    content = <ExpenseForm onAddExpenseItem={onAddExpenseItem} hideForm={handleChangeView} />
  }

  return (
    <div className='new-expense'>
      {content}
    </div>
  );
};

export default NewExpense;
