import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../Store/Slices/AddToCartSlice";

function CartList(Props) {
  const { setQuantity, quantity, setTotal } = Props;
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart);
  const HandleRemoveAll = () => {
    dispatch(removeAll());
  };

  return (
    <div className="max-w-6xl mx-auto mt-5">
      <div className="mb-5">
        <h1>
          <span>Home /</span>
          <span className="ml-1">Cart</span>
        </h1>
      </div>
      <ul className="grid grid-cols-4 gap-[25%] font-bold shadow-md py-2">
        <li className="text-center">Product</li>
        <li className="text-center">Price</li>
        <li className="text-center">Quantity</li>
        <li className="text-center">Subtotal</li>
      </ul>
      <ul>
        {cartProduct.map((product, index) => (
          <li key={index} className="grid grid-cols-4 gap-4 mt-3 shadow-md py-2">
            <div className="flex items-center">
              <img src={product.image} alt="" width={50} />
              <h1 className="ml-2">{product.title}</h1>
            </div>
            <div className="flex items-center ml-24">${product.newPrice}</div>
            <div className="">
              <input
                type="number"
                className="border outline-none w-10 text-center ml-36 mt-2.5"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-end mr-3">
              ${product.newPrice * quantity}
              {setTotal(product.newPrice)}
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-7">
        <button className="font-medium px-10 py-3 bg-transparent border border-gray-400 rounded-sm">
          Return To Products
        </button>
        <button
          className="font-medium px-10 py-3 bg-transparent border border-gray-400 rounded-sm"
          onClick={HandleRemoveAll}
        >
          Remove All
        </button>
      </div>
    </div>
  );
}

export default CartList;
