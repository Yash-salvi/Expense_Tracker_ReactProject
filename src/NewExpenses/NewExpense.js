import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
    const saveExpenseDataHandler=(enteredexpenseData)=>{
        const expenseData = {
            ...enteredexpenseData,
            id:Math.random().toString()
        }

        // console.log(enteredexpenseData)
        console.log(expenseData)
        props.onaddExpense(expenseData);


    }
    return(
        <div className='new-expense'>
           <ExpenseForm onsaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
    };
export default NewExpense;