import React from 'react'
import RegBg from "../assets/images/banner/regbanner.png"
import Tem01 from "../assets/images/banner/t01.jpg"
import { Link } from 'react-router-dom'
import { BiCar, BiCard } from "react-icons/bi";

function Registration() {
  return (
    <div className='registration_area'>
      <img className='img-fit rsponsive__none' src={RegBg} alt="" />
      <div className='genarel_user_box'>
        <div className='container'>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="feature-box text-center">
                <div className="icon">
                  <BiCar />
                </div>
                <div className="content">
                  <h6>General User</h6>
                  <p>Galley simply dummy text lorem Ipsum is of the printin  k a of type and</p>
                </div>
                <Link to="/generaluser-registration" className='reg__btn_' > Sign Up General User </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-box text-center">
                <div className="icon">
                  <BiCard />
                </div>
                <div className="content">
                  <h6>Service Provider</h6>
                  <p>Galley simply dummy text lorem Ipsum is of the printin  k a of type and</p>
                </div>
                <Link to="/" className='reg__btn_'> Sign Up Service Provider </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='regst__team'>
        <img className='team__img' src={Tem01} alt="" />
        <p> Have any question ? </p>
        <h3> (007) 123 456 7890 </h3>
      </div>
    </div>
  )
}

export default Registration