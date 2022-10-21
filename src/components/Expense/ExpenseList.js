import classes from "./ExpenseList.module.css";

const ExpenseList = (props) => {
  return (
    <div className={classes.list}>
      <div>
        <h2>
          {props.no}. {props.desc}
        </h2>
        <h3>
          {`${props.date.getDate()}-${props.date.getMonth()}-${props.date.getFullYear()}`}
        </h3>
      </div>
      <div>
        <h3>{props.cat}</h3>
        <p>${props.expense}</p>
      </div>
    </div>
  );
};

export default ExpenseList;
