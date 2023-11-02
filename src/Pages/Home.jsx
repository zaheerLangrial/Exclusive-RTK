import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import ProductGrid from '../Components/ProductGrid'

function Home() {
  return (
    <>
    <Header homeUnderline={true}/>
    <HeroSection />
    <ProductGrid />
    </>
  )
}

export default Home