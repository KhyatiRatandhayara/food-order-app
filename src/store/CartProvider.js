import { useReducer } from "react";
import {CartContext} from "./cart-context";

const defaultCartState = {
    items : [],
    totalAmount : 0,
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
       
        const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;
        const exitingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const exitingCartItem = state.items[exitingCartItemIndex];
        let updatedItems;
        if(exitingCartItem){
            let updatedItem;
            updatedItem = {
                ...exitingCartItem,
                amount :exitingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[exitingCartItemIndex] = updatedItem;
        } else {
             updatedItems = state.items.concat(action.item);
        }
     return  {
        items : updatedItems,
        totalAmount : updatedTotalAmount,
      }
    }
    if(action.type === 'REMOVE'){
        let updatedItems;
        const exitingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const exitingCartItem = state.items[exitingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - exitingCartItem.price;
        
        if(exitingCartItem.amount === 1){
            updatedItems = state.items.filter((item) => item.id !== action.id)
        } else {
            let updatedItem;
            updatedItem = {
                ...exitingCartItem,
                amount :exitingCartItem.amount -1
            }
            updatedItems = [...state.items];
            updatedItems[exitingCartItemIndex] = updatedItem;
        }
        return {
            items : updatedItems,
            totalAmount : updatedTotalAmount,
        }
    }
   return defaultCartState;
}

export const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addToCartHandler =  item => {
        dispatchCartAction({type : "ADD", item :item })
    }
    const removeFromCartHandler =  id => {
        dispatchCartAction({type : "REMOVE", id :id })
    }

    const cartContext = {
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem : addToCartHandler,
        removeItem : removeFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

