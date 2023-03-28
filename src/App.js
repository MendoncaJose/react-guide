import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses";

const DUMMY_EXPENSES = [
  { id: 'e1',
  title: "engine", 
  amount: 300.12, 
  date: new Date(2023, 3, 23) 
  },
  { id: 'e2',
  title: "eletrical bill", 
  amount: 30.2, 
  date: new Date(2023, 3, 23) 
  },
  { id: 'e3',
    title: "oil", 
  amount: 30, 
  date: new Date(2023, 3, 23) 
  },
  { id: 'e4',
    title: "gas", 
  amount: 100, 
  date: new Date(2023, 3, 23) 
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
