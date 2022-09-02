import React, { useEffect, useState } from "react";
import ExpenseTable from './ExpenseTable/ExpenseTable';
import NewExpense from './NewExpense/NewExpense';
import Navbar from "./Navigation/Navbar";
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';

const MainApp = (props) =>{
    const [expenses, setExpense] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem('token');

    if(!token){
      this.props.history.push("/login");
    }

    async function  fetchData(){
      try{
      const result = await axios(
        'https://financeappback.herokuapp.com/transactions/trans/630bca76f43104d1a1143efb',{headers:{
          "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGJjYTc2ZjQzMTA0ZDFhMTE0M2VmYiIsImlhdCI6MTY2MTk4NzI1MH0.cv8STngBhtwfbXHdlqkzvzOoec1B3aB-l993MBRVQqY"
        }}
      );
      setExpense(result.data.expense);
      }
      catch(e){
        console.log(e.message);
      }
      
    }
      fetchData();
      
  });

    return(
    <div className="App-header">
        <Navbar/>
        <NewExpense expenses = {props.expenses}/>
        <ExpenseTable  expense = {props.expenses}/>
    </div>
    );
};

export default MainApp;

