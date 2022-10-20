import classes from './ExpenseList.module.css';


const ExpenseList = (props) => {
  return (
    <div className={classes.list}>
      <h2>{props.no}. {props.desc}</h2>
      <div>
        <h3>{props.cat}</h3>
        <p>${props.expense}</p>
      </div>
    </div>
  );
};

export default ExpenseList;
