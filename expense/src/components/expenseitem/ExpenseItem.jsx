import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import React, {useState} from "react";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expense.title);

    const handleChange = () =>{
        setTitle("Changed");
    }

    return (
        <div className="expense-item">
            <ExpenseDate date = {props.expense.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className= "expense-item__price">${props.expense.amount}</div>
                <button onClick={handleChange}>Change Title</button>
            </div>
        </div>
    );
}

export default ExpenseItem;