import {  useRef } from "react";
import { Input } from "../../UI/Input";
import classes from "./MealItemForm.module.css";

export const MealItemForm = props => {

  const amountRef = useRef();

  const submitHandler = e => {
      e.preventDefault();
      const enteredAmount = amountRef.current.value;//current.value always gives the string 
      const enteredAmountNumber = +enteredAmount;
      props.onAddTocart(enteredAmountNumber)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref ={amountRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};
