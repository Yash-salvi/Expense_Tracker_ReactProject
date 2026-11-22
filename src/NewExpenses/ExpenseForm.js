
import './ExpenseForm.css';
import React, { useState } from "react";

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // Validate expense form data
        if (
            !enteredTitle.trim() ||
            !enteredAmount ||
            !enteredDate ||
            !Number.isFinite(Number(enteredAmount)) ||
            Number(enteredAmount) <= 0
        ) {
            alert('Please enter valid expense details!');
            return;
        }

        const expenseData = {
            title: enteredTitle.trim(),
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onsaveExpenseData(expenseData);

        console.log(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>

            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                        required
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                        required
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2030-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                        required
                    />
                </div>

            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    );
}

export default ExpenseForm;
