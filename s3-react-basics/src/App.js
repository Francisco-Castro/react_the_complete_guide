import "./App.css";
import Expenses from "./components/Expenses";

const expenses = [
  { id: 1, date: new Date(2021, 2, 28), title: "Car Insurance", amount: 222.5 },
  { id: 2, date: new Date(2020, 1, 13), title: "House Rent", amount: 1111.15 },
  { id: 3, date: new Date(2020, 5, 11), title: "Rental car", amount: 5500.20 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Expenses expenses={expenses}/>
      </header>
    </div>
  );
}

export default App;
