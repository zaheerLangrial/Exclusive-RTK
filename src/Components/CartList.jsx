import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelProduct, removeAll } from "../Store/Slices/AddToCartSlice";
import { updateSubtotal } from "../Store/Slices/SubTotalSlice";

function CartList(Props) {
  const { setQuantity, quantity, setTotal } = Props;
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart);
  const HandleRemoveAll = () => {
    dispatch(removeAll());
  };
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const calculateSubtotal = (product, quantity) => {
    const subtotal = product.newPrice * quantity;
    dispatch(updateSubtotal({ product, quantity }));
    return subtotal;
  };

  const handleCancelButton = (name) => {
    console.log(name)
    dispatch(cancelProduct(name))
  }

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
            <div className="">
              <input
                type="number"
                className="border border-black rounded-md py-1 outline-none w-10 text-center ml-36 mt-2"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-end mr-3">
              ${calculateSubtotal(product, quantity)}
              {hoveredIndex === index && (
                <button className="absolute top-0 left-0 bg-red-500 text-white rounded-full px-2" onClick={() => handleCancelButton(product.title)}>
                  X
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-7">
        <button className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-700">
          Return To Products
        </button>
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
