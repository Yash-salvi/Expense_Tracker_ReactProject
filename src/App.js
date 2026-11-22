// import ExpenseItem from './Expenses/ExpenseItem'
import Expenses from "./Expenses/Expenses";
import NewExpense from './NewExpenses/NewExpense';
import React, { useState, useEffect } from "react";

const API_URL = "https://expense-tracker-react-server.onrender.com";

let DUMMY_EXPENSE = [
  // {id:'e1',
  //   title:'car insurance',
  //   amount:'300',
  //   date:new Date(2025,4,11)
  // },
  // { id:'e2',
  //   title:'house rent',
  //   amount:'1000',
  //   date:new Date(2025,5,12)
  // },
  // { id:'e3',
  //   title:'tution fee',
  //   amount:'500',
  //   date:new Date(2025,6,15)
  // },
  // { id:'e4',
  //   title:'College fee',
  //   amount:'800',
  //   date:new Date(2025,7,15)  
  // }
];
const App = () => {
  // let expenses=[
  //   {id:'e1',
  //     title:'car insurance',
  //     amount:'300',
  //     date:new Date(2025,4,11)

  //   },
  //   {
  //     id:'e2',
  //     title:'house rent',
  //     amount:'1000',
  //     date:new Date(2025,5,12)

  //   },
  //   {
  //     id:'e3',
  //     title:'tution fee',
  //     amount:'500',
  //     date:new Date(2025,6,15)
  //   },
  //   {
  //     id:'e4',
  //     title:'College fee',
  //     amount:'800',
  //     date:new Date(2025,7,15)  
  //   }
  // ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  function FetchData() {
    fetch(`${API_URL}/expenses`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setExpenses(data);
      })
      .catch((error) => {
        console.error("Failed to fetched expenses:", error);
      });
  }

  useEffect(() => {
    FetchData();
  }, []);//



  const addExpenseHandler = (expense) => {
    // const updateExpense=[expense,...expenses]
    // setExpenses(updateExpense);
    // console.log(expense)

    fetch(`${API_URL}/expenses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }
        FetchData();
      })
      .catch((error) => {
        console.error("Failed to add expense:", error);
      });

  }
  return (
    <div>
      <NewExpense onaddExpense={addExpenseHandler} ></NewExpense>
      <Expenses item={expenses}></Expenses>
    </div>
  );
}



export default App;
