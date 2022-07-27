import ExpenseItem from '../ExpenseItem/ExpenseItem.jsx';
import './ExpenseTable.css';

const ExpenseTable = (props) => {
    return (
        <div className="expense-table">
            {props.expense.map((e) => <ExpenseItem key={e.id} expense={e} />)}
        </div>
    );
}

export default ExpenseTable;