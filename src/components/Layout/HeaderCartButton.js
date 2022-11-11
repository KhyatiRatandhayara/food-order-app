import classes from "./HeaderCartButton.module.css";
import { CartIcon } from "../Cart/CartIcon";
import { useContext } from "react";
import {CartContext} from "../../store/cart-context";

export const HeaderCartButton = (props) => {
 const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curtNumber, item) => curtNumber + item.amount,0);//here amount is quantity of that item
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
