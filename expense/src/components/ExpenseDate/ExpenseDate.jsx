import './ExpenseDate.css';


const ExpenseDate = (props) => {
    let dateSplit = props.date.split("-");
    const month = dateSplit[1];
    const day =   dateSplit[2];
    const year = dateSplit[0]; 

    return (
        <div className='expense-date'>
            <div>Month: {month}</div>
            <div>Day: {day}</div>
            <div>Year: {year}</div>
        </div>
    );
}

export default ExpenseDate;