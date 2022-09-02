import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import React from "react";
import axios from 'axios';

const ExpenseItem = (props) => {
    const handleDelete = async () =>{
        const transaction = {
            _id:props.expense._id,
            userId:props.expense.userId,
            title:props.expense.title,
            cost:props.expense.cost,
            description:props.expense.cost,
            date:props.expense.date
        };

        console.log(transaction._id);
        try{
            await axios.delete(
                'https://financeappback.herokuapp.com/transactions',{headers:{
                  "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGJjYTc2ZjQzMTA0ZDFhMTE0M2VmYiIsImlhdCI6MTY2MjA1NjIzMn0.-jFAAp0hrkhQUpO4dbcNv7J6DxoCNsoons2XQH3WzBw"
                },data:transaction}
              );
        }
        catch(e){
            console.log(e.message);
        }

         window.location.reload();
        
    }

    return (
        <div className="expense-item">
            <ExpenseDate date = {props.expense.date}/>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <h2>{props.expense.description}</h2>
                <div className= "expense-item__price">${props.expense.cost}</div>
                <button className="detele-expense" onClick={handleDelete}>Delete Card</button>
            </div>
        </div>
    );
}

export default ExpenseItem;