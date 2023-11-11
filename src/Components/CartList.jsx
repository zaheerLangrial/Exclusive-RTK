import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelProduct,
  decrementQ,
  incrementQ,
  removeAll,
} from "../Store/Slices/AddToCartSlice";
import { updateSubtotal } from "../Store/Slices/SubTotalSlice";
import { Link } from "react-router-dom";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

function CartList() {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart);
  console.log(cartProduct);
  const HandleRemoveAll = () => {
    dispatch(removeAll());
  };
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleCancelButton = (name) => {
    dispatch(cancelProduct(name));
  };

  return (
    <div className="w-[1170px] mx-auto mt-5">
      <div className="mb-5">
        <h1 className="text-xl font-bold">
          <span className="text-gray-600">Home /</span>
          <span className="ml-1">Cart</span>
        </h1>
      </div>
      <ul className="grid grid-cols-4 gap-[25%] font-bold shadow-md py-2 px-4">
        <li className="text-center">Product</li>
        <li className="text-center">Price</li>
        <li className="text-center">Quantity</li>
        <li className="text-center">Subtotal</li>
      </ul>
      <ul>
        {cartProduct.map((product, index) => (
          <li
            key={index}
            className="grid grid-cols-4 gap-4 mt-3 shadow-md py-2 relative px-4"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <div className="flex items-center">
              <img src={product.image} alt="" width={50} />
              <h1 className="ml-2">{product.title}</h1>
            </div>
            <div className="flex items-center ml-24">${product.newPrice}</div>
            <div className="flex justify-center items-center">
              <div className=" w-fit border rounded-md ml-14 p-2 flex space-x-2 items-center">
                <h1 className="">{product.quantity}</h1>
                <div>
                  <BiSolidUpArrow
                    onClick={() => dispatch(incrementQ(product.title))}
                  />
                  <BiSolidDownArrow
                    onClick={() => dispatch(decrementQ(product.title))}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end mr-3">
              ${product.quantity * product.newPrice}
              {hoveredIndex === index && (
                <button
                  className="absolute top-0 left-0 bg-red-500 text-white rounded-full px-2"
                  onClick={() => handleCancelButton(product.title)}
                >
                  X
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-7">
        <Link to={"/products"}>
          <button className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-700">
            Return To Products
          </button>
        </Link>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-700"
          onClick={HandleRemoveAll}
        >
          Remove All
        </button>
      </div>
    </div>
  );
}

export default CartList;
