import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    return(
        <div className="new-expense" >
           <ExpenseForm expense = {props.expenses}/>
        </div>
    );
}

export default NewExpense;