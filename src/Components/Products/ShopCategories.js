import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Container, Row, Col } from 'react-bootstrap';

// Images
import Catagori01 from "../../assets/images/product/c1.jpg"
import Catagori02 from "../../assets/images/product/c2.jpg"
import Catagori03 from "../../assets/images/product/c3.jpg"
import Catagori04 from "../../assets/images/product/c4.jpg"
import Catagori05 from "../../assets/images/product/c5.jpg"

import { RiArrowDropDownFill } from "react-icons/ri";

export class ShopCategories extends Component {
    constructor() {
        super()
        this.state = {
            responsive: {
                0: {
                    items: 2,
                },
                450: {
                    items: 2,
                },
                600: {
                    items: 2,
                },
                1024: {
                    items: 4,
                },
                1366: {
                    items: 5,
                },
            },
        }

    }
    render() {
        return (
            <div className='home_category_area'>
                <Container>
                    <Row>
                        <Col>
                            <div className='setion____title'>
                                <h3> Shop by <span> Categories </span> </h3>
                            </div>
                            <OwlCarousel className='owl-theme'
                                loop
                                margin={10}
                                nav={false}
                                dots={false}
                                autoplay={true}
                                autoplayTimeout={5000}
                                responsive={this.state.responsive}>
                                <div className='item'>
                                    <div className='h_c_box'>
                                        <img className='img-fit' src={Catagori01} alt="okkk" />
                                        <div className='h_c_box_txt'>
                                            <h4>Car Parts </h4>
                                            <p className="desc">19<span> Devices</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='h_c_box'>
                                        <img className='img-fit' src={Catagori02} alt="okkk" />
                                        <div className='h_c_box_txt'>
                                            <span className='new_tag_c'> New <RiArrowDropDownFill /> </span>
                                            <h4>Transmission </h4>
                                            <p className="desc">16<span> Devices</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='h_c_box'>
                                        <img className='img-fit' src={Catagori03} alt="okkk" />
                                        <div className='h_c_box_txt'>
                                            <h4>Applications </h4>
                                            <p className="desc">19<span> Devices</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='h_c_box'>
                                        <img className='img-fit' src={Catagori04} alt="okkk" />
                                        <div className='h_c_box_txt'>
                                            <span className='new_tag_c'> New <RiArrowDropDownFill /> </span>
                                            <h4>Wheels </h4>
                                            <p className="desc">19<span> Devices</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='h_c_box'>
                                        <img className='img-fit' src={Catagori05} alt="okkk" />
                                        <div className='h_c_box_txt'>
                                            <h4>Radiator </h4>
                                            <p className="desc">19<span> Devices</span></p>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ShopCategories