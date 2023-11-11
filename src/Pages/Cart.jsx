import React from "react";
import Header from "../Components/Header";
import CartList from "../Components/CartList";
import CartRecipt from "../Components/CartRecipt";

function Cart() {
  return (
    <>
      <Header />
      <CartList />
      <CartRecipt />
    </>
  );
}

export default Cart;
