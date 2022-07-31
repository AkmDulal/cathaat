// import React from 'react'
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
// import Catagories from "../Layout/Catagories"
// import image1 from '../../assets/images/banner/01Banner.jpg'
// import image2 from '../../assets/images/banner/01Banner.jpg'
// import image3 from '../../assets/images/banner/01Banner.jpg'
// import image4 from '../../assets/images/banner/01Banner.jpg'
// import { Link } from 'react-router-dom';
// import { RiFacebookLine, RiLinkedinLine, RiTwitterLine, RiArrowRightSLine,  } from "react-icons/ri";

// // Images
// // import Banner0122222 from "../../assets/images/banner/banner01.jpg"

// function HomeSlider() {
//     return (
//         <div className='home_banner_area'>
// <AliceCarousel autoPlay autoPlayInterval="3000">
//     <img src={image1} className="sliderimg img-fit" alt="" />
//     <img src={image2} className="sliderimg img-fit" alt="" />
//     <img src={image3} className="sliderimg img-fit" alt="" />
//     <img src={image4} className="sliderimg img-fit" alt="" />
// </AliceCarousel>
//             <ul className="banner-social-media">
//                 <li>
//                     <Link to="/" className="btn-base-m">
//                         <RiFacebookLine />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" className="btn-base-m">
//                         <RiLinkedinLine />
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/" className="btn-base-m">
//                         <RiTwitterLine />
//                     </Link>
//                 </li>
//             </ul>
//             <div className='slider__text'>
//                 <h1> Explore the latest collection </h1>
//                 <Link to="/" className='slider__btn'> Explore More <RiArrowRightSLine />  </Link>
//                 <Link to="/" className='slider__btn'> Contact Us <RiArrowRightSLine /> </Link>
//             </div>
//             <div className='categories___area'>
//                 <Catagories />
//             </div>
//         </div>
//     )
// }

// export default HomeSlider

import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Catagories from "../Layout/Catagories"
// import { Link } from 'react-router-dom';
import image1 from '../../assets/images/banner/b1.jpg'
import image2 from '../../assets/images/banner/b2.jpg'
function HomeSlider() {
    return (
        <div>
            <div className='hero__slider--section slider__section--bg2 section--padding'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-lg-3 d-flex align-items-stretch'>
                            <div className='card card_slider'>
                                <Catagories />
                            </div>
                        </div>

                        <div className='col-lg-9 d-flex align-items-stretch'>
                            <div className='card card_slider'>
                                <AliceCarousel autoPlay autoPlayInterval="3000">
                                    <img src={image1} className="sliderimg img-fit" alt="" />
                                    <img src={image2} className="sliderimg img-fit" alt="" />
                                    <img src={image2} className="sliderimg img-fit" alt="" />
                                    <img src={image1} className="sliderimg img-fit" alt="" />
                                </AliceCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSlider



