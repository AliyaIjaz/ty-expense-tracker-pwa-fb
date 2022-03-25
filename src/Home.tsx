import { useState, useContext } from 'react'
import { TransactionContext } from './transContext';
import logo from './logo1.png'

export default function Home() {
  let [amount, setAmount] = useState(0);
  let [desc, setDesc] = useState('');

  let { transactions, addTransaction, delTransaction } = useContext(TransactionContext);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 1000);
    let newTransaction = {
      desc: desc,
      amount: amount,
      id: id
    }
    addTransaction(newTransaction);
    setAmount(0);
    setDesc('');
  }

  const handleDelete=(id:number)=>{
    delTransaction(id);

  }

  const getIncome=()=>{
    let income=0;
    for(var i=0; i<transactions.length; i++){
      if(transactions[i].amount > 0){
          income+=transactions[i].amount;
      }
    }
    return income;
  }
  const getExpense=()=>{
    let expense=0;
    for(var i=0; i<transactions.length; i++){
      if(transactions[i].amount < 0){
          expense+=transactions[i].amount;
      }
    }
    return expense;

  }

  return (
    <div className="App">
      <img src={logo}></img>
      <h2>Expense Tracker App</h2>
      <div className="h-container">
        <h4>Your Balance</h4>
        <div>${getIncome()+getExpense()}</div>
      </div>
      <div className="container">
        <h4>INCOME <br /><br />${getIncome()}</h4>

        <h4>EXPENSE <br /><br />${getExpense()}</h4>
      </div>
      <hr />
      <h4 className="h-container">History</h4>
      <ul className="history">
        {transactions.map((tObj, ind) => {
          return (
            <div key={ind}>
              <li id={tObj.amount<0 ? "red":""}>
                <span>{tObj.desc}</span>
                <span>${tObj.amount}</span>
                <span onClick={()=>handleDelete(tObj.id)}><i id='fa' className="fa-solid fa-trash-can"></i></span>
                
              </li>
            </div>
          )
        })}
      </ul>
      <hr />
      <div className="h-container">
        <h4>Add New Transaction</h4>
        <form onSubmit={handleSubmit}>
          <label>
            Enter Amount <br />Positive value for Income and Negative for Expense
            <input
              type="number"
              name="amt"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </label>
          <label>
            <br /> Enter Description <br />
            <input
              type="text"
              name="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </label><br />
          <input id='bt' type="submit" value="ADD TRANSACTION" />
        </form>
      </div>
    </div>
  )
}
