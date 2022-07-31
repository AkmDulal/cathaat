import React from 'react'
import Banner from "../assets/images/product/banner1.png"
function DiscountBanner() {
  return (
    <div className='discount__area_box'>
        <div className='container'>
            <img className='img-fit' src={Banner} alt="" />
            <div className='discount__text'>
                <h5>  Flat 50% Discount  </h5>
                <h3>All Car Parts</h3>
                <button>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default DiscountBanner