import React, { useRef } from "react";
import HeartIcon from "../assets/heart small.svg";
import CartIcon from "../assets/Cart.svg";
import SearchIcon from "../assets/Search.svg";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct } from "../Store/Slices/ProductsSlice";

function Header(props) {
  const { homeUnderline } = props;
  const dispatch = useDispatch();
  const inputRef = useRef();
  const likes = useSelector((state) => state.like);
  const cartProducts = useSelector((state) => state.cart);
  const HandleFilterProduct = () => {
    dispatch(filterProduct(inputRef.current.value));
  };
  return (
    <div className=" w-full sticky top-0 bg-[#ffff] z-10">
      <div className="w-[1170px] mx-auto flex justify-between items-center py-5 ">
        <div>
          <h1 className="text-2xl font-bold">Exclusive</h1>
        </div>
        <div className="text-base font-normal flex space-x-[48px]">
          <Link to={"/"}>
            <button
              className={`${
                homeUnderline === true ? "border-b border-black" : ""
              }`}
            >
              Home
            </button>
          </Link>
          <Link to={"/products"}>
            <button>Products</button>
          </Link>
        </div>
        <div className="flex space-x-[24px]">
          <div className="flex items-center bg-[#F5F5F5] px-3 space-x-3 rounded-md">
            <input
              className=" bg-transparent outline-none w-60"
              type="text"
              placeholder="What are you looking for?"
              ref={inputRef}
              onChange={HandleFilterProduct}
            />
            <Button child={SearchIcon} alt="Search Icon" />
          </div>
          <div className="flex items-center space-x-7">
            <div className=" relative">
              <Button child={HeartIcon} alt="Heart Icon" width={32} />
              <p className="bg-[#DB4444] text-xs rounded-full  flex justify-center text-white absolute top-0 right-0 px-1">
                {likes.length}
              </p>
            </div>

            <div className=" relative">
              <Link to={"/cart"}>
                {" "}
                <Button child={CartIcon} alt="Cart Icon" />
              </Link>

              <p className="bg-[#DB4444] text-xs rounded-full  flex justify-center text-white absolute top-0 right-0 px-1">
                {cartProducts.length}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
