import React from 'react'
import HomeSlider from "../Components/Slider/HomeSlider"
import ShopCategories from "../Components/Products/ShopCategories"
import FlashSale from "../Components/Products/FlashSale"
import DiscountBanner from "../Components/DiscountBanner"
import PartsInventory from "../Components/Products/PartsInventory"
import CarService from "../Components/Products/CarService"
import RecommendedForYou from "../Components/Products/RecommendedForYou"
function HomePages() {
  return (
    <div>
        <HomeSlider />
        <ShopCategories />
        <DiscountBanner />
        <FlashSale />
        <PartsInventory />
        <CarService />
        <RecommendedForYou />
    </div>
  )
}

export default HomePages