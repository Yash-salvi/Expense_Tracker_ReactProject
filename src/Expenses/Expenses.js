import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
function Expenses(props) {
  return (
    <Card className='expenses'>
      {
        props.item.map(
          (expense)=>(
            <ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount} />
          )
        )
      }

        {/* <ExpenseItem 
            date={props.item[0].date}
            title={props.item[0].title}
            amount={props.item[0].amount}>
      </ExpenseItem>
         <ExpenseItem 
            date={props.item[1].date}
            title={props.item[1].title}
            amount={props.item[1].amount}>
      </ExpenseItem>
      <ExpenseItem 
            date={props.item[2].date}
            title={props.item[2].title}
            amount={props.item[2].amount}>
      </ExpenseItem>
      <ExpenseItem 
             date={props.item[3].date}
              title={props.item[3].title}
               amount={props.item[3].amount}>
      </ExpenseItem> */}
    </Card>
  );
}

export default Expenses;