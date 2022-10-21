import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/auth-context";
import classes from "./Expense.module.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const Expense = () => {
  const cxt = useContext(AuthContext);
  const [isForm, setForm] = useState(false);
  const [items, setItem] = useState([]);
  const formHandler = () => {
    setForm(!isForm);
  };
  
  const email= cxt.email.split('@');

  const url = `https://expense-tracker-3cb01-default-rtdb.asia-southeast1.firebasedatabase.app/${email[0]}.json`;

  const addHandler = async (obj) => {
    console.log(obj);
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(obj),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      alert("Can't send your request to server");
    }
    setItem([obj, ...items]);
    setForm(!isForm);
  };

  useEffect(() => {
    const get = async () => {
      const rawData = await fetch(url);
      const getData = await rawData.json();
      let pushArray = [];
      for (const key in getData) {
        const obj = {
          expense: getData[key].expense,
          description: getData[key].description,
          category: getData[key].category,
          date: new Date(getData[key].date),
        };
        pushArray.push(obj);
      }
      setItem(pushArray);
    };

    get();
  }, [url]);

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
        date={element.date}
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
