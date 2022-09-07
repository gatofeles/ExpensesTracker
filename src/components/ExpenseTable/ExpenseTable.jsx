import ExpenseItem from '../ExpenseItem/ExpenseItem.jsx';
import './ExpenseTable.css';
import React, { useEffect, useState } from "react";

const ExpenseTable = (props) => {
    const [length, setLength] = useState(0);

    useEffect(() => {
        setLength(props.expense.length);
      // console.log("Length");
       //console.log(length);
    });

    if(length>0){
        return (
            <div className="expense-table">
                {props.expense.map((e) => <ExpenseItem key={e._id} expense={e} length = {props.expense.length}/>)}
            </div>
        );
    }
    else{
        return(
        <div className="no-item">
                 No expenses to render.
        </div>); 
    }
    
}

export default ExpenseTable;