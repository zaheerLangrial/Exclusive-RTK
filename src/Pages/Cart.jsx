import React, { useState } from 'react'
import Header from '../Components/Header'
import CartList from '../Components/CartList'
import CartRecipt from '../Components/CartRecipt'

function Cart() {
  const [total , setTotal] = useState(1)
  const [quantity , setQuantity] = useState(1)
  return (
    <>
    <Header />
    <CartList quantity={quantity} setQuantity={setQuantity} setTotal={setTotal} />
    <CartRecipt quantity={quantity} setQuantity={setQuantity} total={total} setTotal={setTotal}/>
    </>
  )
}

export default Cart