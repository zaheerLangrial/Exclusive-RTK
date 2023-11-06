import React, { useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

function ProductGrid() {
  const [viewAllProduct, setViewAllProduct] = useState(false);
  const products = useSelector((state) => state.product);
  const displayedProducts = viewAllProduct ? products : products.slice(0, 4);

  return (
    <div className="w-full py-5">
      <div className="w-[1170px] mx-auto">
        <div className="grid grid-cols-4 gap-x-[30px] py-5">
          {displayedProducts.map((product , index) => (
            <Card
            key = {index}
              imgLink={product.image}
              discount={product.discountInPercentage}
              ProductName={product.title}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
            />
          ))}
        </div>
        <div className="flex justify-center items-center py-5">
          <button
            className="py-5 px-10 bg-[#DB4444] text-white rounded-sm"
            onClick={() => setViewAllProduct(!viewAllProduct)}
          >
            {viewAllProduct ? "Show Less Products" : "View All Products"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
