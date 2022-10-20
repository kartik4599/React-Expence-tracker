import { useState } from "react";
import classes from "./Expense.module.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const Expense = () => {
  const [isForm, setForm] = useState(false);
  const [items, setItem] = useState([]);
  const formHandler = () => {
    setForm(!isForm);
  };

  const addHandler = (obj) => {
    console.log(obj);
    setItem([obj, ...items]);
    setForm(!isForm);
  };

  let totalAmount = 0;

  const list = items.map((element, i) => {
    totalAmount += parseInt(element.expense);
    return (
      <ExpenseList
        key={i}
        expense={element.expense}
        desc={element.description}
        cat={element.category}
        no={i + 1}
      />
    );
  });

  return (
    <div>
      <div className={classes.getForm}>
        {!isForm && <button onClick={formHandler}>Add Expense</button>}
        {isForm && <button onClick={formHandler}>Remove Form</button>}
        {isForm && (
          <span>
            <ExpenseForm add={addHandler} cancle={formHandler} />
          </span>
        )}
      </div>
      <div className={classes.expenseList}>
        <h2>Expense List</h2>
        <div>
          {list}
          <span>Total Amount - ${totalAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default Expense;
