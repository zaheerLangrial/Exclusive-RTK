import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import { addCart } from '../Store/Slices/AddToCartSlice'

function ProductHeroSection() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)
    const handleAllToCart = () => {
        products.map((pro) => dispatch(addCart(pro)))
    }
  return (
    <div className='w-[1170px] mx-auto mt-[50px]'>
        <div className='flex justify-between items-center'>
            <h1 className=' text-xl'>{`Total Products (${products.length})`}</h1>
            <button className='font-medium px-10 py-3 bg-transparent border border-gray-400 rounded-sm' onClick={handleAllToCart}>
            Move All To Cart
            </button>
        </div>
        <div className="grid grid-cols-4 gap-x-8 py-5">
          {products.map((product , index) => (
            <Card
            key = {index}
              imgLink={product.image}
              discount={product.discountInPercentage}
              ProductName={product.title}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
              addToCart = {true}
            />
          ))}
        </div>
    </div>
  )
}

export default ProductHeroSection