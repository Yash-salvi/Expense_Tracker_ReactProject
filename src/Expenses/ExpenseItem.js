import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
// import React,{useState} from 'react';


function ExpenseItem(props) {
  // let month=Props.date.toLocaleString('en-US',{month:'long'});
  // let day=Props.date.toLocaleString('en-US',{day:'2-digit'});
  // let year=Props.date.getFullYear();
  // const [title,setTitle]=useState(props.title);
  // function changeTitle(){
    // alert('clicked');
    // let tittle="new Tittle";
    // console.log("Tittle change using hook")
  //   setTitle('Updated!!');
  // }
  // const ExpenseItem = (props) => {
    // let[newtitle,setnewTitle]=useState('');
    // const[title,setTitle]=useState(props.title);
    // function changeTitle(){
    //   setTitle(newtitle);
    // }
    // function changeHandler(event){
    //   setnewTitle(event.target.value);
    // }

   

  return (
    <Card className='expense-item'>
   
      <ExpenseDate date={new Date(props.date)}></ExpenseDate>
      <div className="expense-item_description">
        <h2> {props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
       {/* { <input type="text" value={newtitle} onChange={changeHandler}></input> } */}
        {/* {<button onClick={changeTitle}>Change Title</button>}  */}
    </Card>
  );
}

export default ExpenseItem;