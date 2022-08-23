import React from 'react'
import { Link } from 'react-router-dom'
import Figure78 from "../assets/images/figure78.png"
import Figure79 from "../assets/images/figure79.png"
import CarIdRed from "../assets/images/car-in-red.png"
function AboutUs() {
    return (
        <div>
            <section className="breadcrumb-wrap">
                <div className="breadcrumb-img1">
                    <img src={Figure79} alt="figure" width="223" height="109" />
                </div>
                <div className="breadcrumb-img2">
                    <img src={Figure78} alt="figure" width="185" height="56" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-box">
                                <h1 className="page-title">About Our Company</h1>
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/"> Home </Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className='about__contant'>
                                {/* <h3> Our Mission </h3> */}
                                <h1>Our <span class="heading-color"> Mission </span> </h1>
                                <h5> Making Commerce Better For Everyone </h5>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className='about__contant about__contant__txt'>
                                {/* <h3> Our Mission </h3> */}
                                <h1>Our <span class="heading-color"> People </span> </h1>
                                <h5> Making Commerce Better For Everyone </h5>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='about__contant'>
                               <img src={CarIdRed} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            {/* <img src={HeaderBg} alt="" /> */}
        </div>
    )
}

export default AboutUs