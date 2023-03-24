import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses';

function App() {
  const expenses =[
    {title: 'engine', 
    amount: 300.12, 
    date: new Date(2023, 3, 23)},
    {title: 'eletrical bill', 
    amount: 30.2, 
    date: new Date(2023, 3, 23)},
    {title: 'oil', 
    amount: 30, 
    date: new Date(2023, 3, 23)},
    {title: 'gas', 
    amount: 100, 
    date: new Date(2023, 3, 23)},
  ];

  const addExpenseHandler = expense => {

  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
