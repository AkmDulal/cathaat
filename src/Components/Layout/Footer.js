import React from 'react'
import { Link } from 'react-router-dom'
import { RiFacebookLine, RiLinkedinLine, RiYoutubeLine, RiTwitterLine } from "react-icons/ri";
import FooterLogo from "../../assets/images/footer_logo.png"
function Footer() {
  return (
    <div className='footer__section'>
      <div className='container'>
        <div className="newsletter__area">
          <div className="newsletter__inner d-flex justify-content-between align-items-center">
            <div className="newsletter__content">
              <h2 className="newsletter__title">Subscribe <span className="text__secondary">Newsletter</span></h2>
              <p className="newsletter__desc">Don’t wait make a smart &amp; logical quote here. Its pretty easy.</p>
            </div>
            <div className="newsletter__subscribe">
              <form className="newsletter__subscribe--form" action="#">
                <label>
                  <input className="newsletter__subscribe--input" placeholder=" Enter Your Email" type="text" />
                </label>
                <button className="newsletter__subscribe--button" type="submit">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6 col-lg-3'>
            <div className='footer__box'>
              <h3> About Us  </h3>
              <p> Corporate clients and leisure travelers has been relying on Groundlink for dependable safe, and professional chauffeured car end service in major cities across World. </p>
              <div className='footer__social_icon'>
                <RiFacebookLine />
                <RiLinkedinLine />
                <RiYoutubeLine />
                <RiTwitterLine />
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-3'>
            <div className='footer__box'>
              <h3> My Account   </h3>
              <Link to="/">My Account</Link>
              <Link to="/">Shopping Cart</Link>
              <Link to="/">Login</Link>
              <Link to="/">Register</Link>
              <Link to="/">Checkout</Link>
            </div>
          </div>
          <div className='col-sm-6 col-lg-3'>
            <div className='footer__box'>
              <h3> Resources    </h3>
              <Link to="/">Contact Us</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Wishlist</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Frequently</Link>
            </div>
          </div>
          <div className='col-sm-6 col-lg-3'>
            <div className='footer__box'>
              <h3> FIND IT FAST </h3>
              <Link to="/">Smartphone ablet</Link>
              <Link to="/">Computer Laptop</Link>
              <Link to="/">Login</Link>
              <Link to="/">Register</Link>
              <Link to="/">Checkout</Link>
            </div>
          </div>
          <div className='col-lg-12'>
            <div className='footer__bottom d-flex justify-content-between align-items-center'>
              <div className='footer__logo'>
                <img src={FooterLogo} alt="okk" />
              </div>
              <div className='copyright__content'>
                <h1> © 2022 Powered by Carhaat . All Rights Reserved. </h1>
              </div>
              <div className='footer__payment'>
                <img src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/icon/payment-img.webp" alt="okk" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

