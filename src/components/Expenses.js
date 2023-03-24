import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2023');
  
  const filterChange = selectedYear => {
    setFilteredYear(selectedYear);  
  }

    return(
      <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} 
      onChangeFilter ={filterChange} />
      {props.expenses.map((expenses) => (
      <ExpenseItem 
      title={expenses.title} 
      amount={expenses.amount} 
      date={expenses.date}/>))}
    </Card>
    </div>
    );
}

export default Expenses;