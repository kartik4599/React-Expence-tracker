import { useRef } from "react";
import Modal from "../Modal/Modal";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const expenseRef = useRef();
  const descRef = useRef();
  const catRef = useRef();

  const subitHandler = (e) => {
    e.preventDefault();
    const obj = {
      expense: expenseRef.current.value,
      description: descRef.current.value,
      category: catRef.current.value,
    };
    console.log(obj);
    props.add(obj);
  };
  
  return (
    <Modal close={props.cancle}>
      <div className={classes.expense}>
        <span>
          <h2>Add Expense</h2>
          <button onClick={props.cancle}>close</button>
        </span>

        <form onSubmit={subitHandler}>
          <label>Expense : </label>
          <input ref={expenseRef} type="number" required/>
          <br />
          <label>Description : </label>
          <input ref={descRef} type="text" required/>
          <br />
          <label>Category : </label>
          <input ref={catRef} list="category" required/>
          <datalist id="category">
            <option value="Home"></option>
            <option value="Electricity"></option>
            <option value="Food"></option>
            <option value="Petrol"></option>
            <option value="Entertainment"></option>
          </datalist>
          <br />
          <button>Add</button>
        </form>
      </div>
    </Modal>
  );
};

export default ExpenseForm;