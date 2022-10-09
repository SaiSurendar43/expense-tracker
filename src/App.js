import "./App.css";
import Balance from './expense/Balance';
import List from './list/List';
import React, { useState } from "react";
import moment from "moment";

function App() {
  const [balance, setBalance] = useState();
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);
  const calculateTotal = () => {
    if (balance === 0) {
      alert("Please enter a valid input");
      return;
    }
    setTotal(parseInt(total) + balance);
    let my_object = {};
    my_object.date = moment().format("MMMM Do YYYY, h:mm:ss a");
    my_object.total = " + " + balance;
    setList((list) => [...list, my_object]);
  };
  const minusTotal = () => {
    if (balance === 0) {
      alert("Please enter a valid input");
      return;
    }
    setTotal(parseInt(total) - balance);
    let my_object = {};
    my_object.date = moment().format("MMMM Do YYYY, h:mm:ss a");
    my_object.total = " - " + balance
    setList((list) => [...list, my_object]);
  };
  return (
    <div>
      <Balance
        tl={total}
        setbal={setBalance}
        bal={balance}
        minus={minusTotal}
        add={calculateTotal}
      />
      <List lst={list} />
    </div>
  );
}

export default App;


