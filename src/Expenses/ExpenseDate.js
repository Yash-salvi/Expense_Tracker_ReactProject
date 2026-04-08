import './ExpenseDate.css';

function ExpenseDate(props){
  // Normalize/validate incoming date. If props.date is a Date use it,
  // if it's a parseable string/number try to construct a Date.
  const raw = props.date;
  let dateObj = null;

  if (raw) {
    dateObj = raw instanceof Date ? raw : new Date(raw);
    // new Date(invalid) yields NaN time; guard against that
    if (isNaN(dateObj.getTime())) {
      dateObj = null;
    }
  }

  // Fallback UI when no valid date is available
  if (!dateObj) {
    return (
      <div className="expense-date">
        <div className='expense-date_month'>--</div>
        <div className='expense-date_year'>----</div>
        <div className='expense-date_day'>--</div>
      </div>
    );
  }

  const month = dateObj.toLocaleString('en-US', { month: 'long' });
  const day = dateObj.toLocaleString('en-US', { day: '2-digit' });
  const year = dateObj.getFullYear();

  return (
    <div className="expense-date">
      <div className='expense-date_month'>{month}</div>
      <div className='expense-date_year'>{year}</div>
      <div className='expense-date_day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
// import './ExpenseDate.css';

// function ExpenseDate(props) {
//   // if (!props.date) {
//   //   return <div className="expense-date">No date</div>;
//   // }

//   const month = props.date.toLocaleString('en-US', { month: 'long' });
//   const day = props.date.toLocaleString('en-US', { day: '2-digit' });
//   const year = props.date.getFullYear();

//   return (
//     <div className="expense-date">
//       <div className="expense-date_month">{month}</div>
//       <div className="expense-date_year">{year}</div>
//       <div className="expense-date_day">{day}</div>
//     </div>
//   );
// }

// export default ExpenseDate;
