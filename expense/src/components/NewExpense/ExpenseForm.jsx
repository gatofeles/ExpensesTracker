import './ExpenseForm.css';
import React, {useState} from "react";
import axios from 'axios';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [cost, setCost] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const getDescription = (e) => {
        setDescription(e.target.value);
    }
    const getTitle = (e) => {
        setTitle(e.target.value);
    }
    const getCost = (e) => {
        setCost(e.target.value);
    }
    const getDate = (e) => {
        setDate(e.target.value);
    }

    const createNewTransaction = async (e) => {
        console.log(title);
        e.preventDefault();
        const trasaction = {
            userId:'630bca76f43104d1a1143efb',
            title:title,
            cost:cost,
            description:description,
            date:date
        }

        const result = await axios.post(
            'https://financeappback.herokuapp.com/transactions',trasaction,{headers:{
              "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGJjYTc2ZjQzMTA0ZDFhMTE0M2VmYiIsImlhdCI6MTY2MTk4NzI1MH0.cv8STngBhtwfbXHdlqkzvzOoec1B3aB-l993MBRVQqY"
            },}
          );
        //console.log(result.data);
        if(props.expense.length == 0){
            window.location.reload();
        }
        
    }


    return(
            <form onSubmit={createNewTransaction}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type = 'text' minLength={5} required={true} onChange={getTitle}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Description</label>
                        <input type = 'text' minLength={5} required={true} onChange={getDescription}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type = 'number' step="0.01" required={true} onChange={getCost}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type = 'date' min="2019-01-01" max="2022-12-31" required = {true} onChange={getDate}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type = "submit"  >Add Expense</button>
                </div>
            </form>
    );
    }    

export default ExpenseForm;