import React, { useEffect, useState } from "react";
import ExpenseTable from './ExpenseTable/ExpenseTable';
import NewExpense from './NewExpense/NewExpense';
import Navbar from "./Navigation/Navbar";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const MainApp = (props) =>{
    const [expenses, setExpense] = useState([]);
    const navigate = useNavigate();


  useEffect(() => {
    
    //const token = localStorage.getItem('finance-token');
    
    if(localStorage.getItem("finance-token") == undefined || localStorage.getItem("finance-token") == null ){
      navigate("/login");
    }

    async function  fetchData(){
      try{
      
      const result = await axios(
         process.env.REACT_APP_BACKEND + 'transactions/trans/'+localStorage.getItem("finance-user"),{headers:{
          "x-auth-token":localStorage.getItem("finance-token")
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
        <NewExpense expenses = {expenses} userId = {props.userId} token = {props.token}/>
        <ExpenseTable  expense = {expenses}/>
    </div>
    );
};

export default MainApp;

