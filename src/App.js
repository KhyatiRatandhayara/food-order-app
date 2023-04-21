import "./App.css";
import React, {  Suspense, useState } from "react";
import Header from "@components/Layout/Header";
import { Meals } from "@components/Meals/Meals";
// import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "@store/CartProvider";

const Cart = React.lazy(()=> import('./components/Cart/Cart'));

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };


  
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
   
    <CartProvider>
       <Suspense fallback={<p>Loading...</p>}>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      </Suspense> 
      <Header onShowCart={showCartHandler} warn={true}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
