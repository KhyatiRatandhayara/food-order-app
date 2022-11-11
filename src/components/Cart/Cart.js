import classes from "./Cart.module.css";
import { Modal } from "../UI/Modal";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import CartItem from "./CartItem";

export const Cart = (props) => {

 const cartCtx =  useContext(CartContext);
 const hasItems = cartCtx.items.length>0;
 const totalItemsAmount = `$${cartCtx.totalAmount.toFixed(2)}`

 const addToCartHandler = item => {
  cartCtx.addItem(item);
 }
 
  const removeFromCartHandler = id => {
    cartCtx.removeItem(id);
  }
 
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onAdd ={()=>addToCartHandler(item)} onRemove = {()=> removeFromCartHandler(item.id)}/>
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalItemsAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
