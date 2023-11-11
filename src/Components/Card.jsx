import React from "react";
import Button from "./Button";
import HeartIcon from "../assets/heart small.png";
import CartIcon from "../assets/Cart.png";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../Store/Slices/LikeSlice";
import { addCart } from "../Store/Slices/AddToCartSlice";

function Card({ product, addToCart }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  return (
    <div>
      <div className="w-[270px] h-[250px] flex justify-center items-center bg-[#F5F5F5] relative">
        <img src={product.image} alt="" className="bg-[#F5F5F5]" />
        {product.discountInPercentage > 0 ? (
          <p className="bg-[#DB4444] py-1 px-2 rounded-md text-white absolute top-2 left-3">
            {product.discountInPercentage}%
          </p>
        ) : (
          ""
        )}

        <Button
          className="bg-white rounded-full flex items-center p-1 absolute top-2 right-3"
          child={HeartIcon}
          alt="Add heart"
          onClick={() => dispatch(addLike(product))}
        />

        {addToCart === true ? (
          <button
            className="flex space-x-2 absolute bottom-0 py-2 bg-black w-full text-white justify-center"
            onClick={() => dispatch(addCart({ ...product, quantity: 1 }))}
          >
            <img src={CartIcon} alt="Cart Icon" />
            <span>Add To Cart</span>
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="py-2">
        <h1 className=" text-base font-medium">{product.title}</h1>
        <div className="flex space-x-2 text-base">
          <p className="text-[#DB4444]">${product.newPrice}</p>
          {product.discountInPercentage > 0 ? (
            <p className="line-through ">${product.oldPrice}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
