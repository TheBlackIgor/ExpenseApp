import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';


const ExpensesList = (props) => {

    let expenseContent = <h3 className='expenses-list__fallback'>No expenses found :c</h3>

    if (props.filteredExpenses.length > 0) {
        expenseContent = props.filteredExpenses.map((el, i) => {
            return <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date} />
        }
        )
    }

    return (
        <div className="expenses-list">
            {expenseContent}
        </div>
    );
}

export default ExpensesList;
