import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Images
import Catagori01 from "../../assets/images/product/p1.png"
import Catagori02 from "../../assets/images/product/p2.png"
import Catagori03 from "../../assets/images/product/p3.png"
import Catagori04 from "../../assets/images/product/p4.png"
import Catagori05 from "../../assets/images/product/p5.png"
import Catagori06 from "../../assets/images/product/p6.png"

// import { RiArrowDropDownFill } from "react-icons/ri";

export class FlashSale extends Component {
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
                    items: 3,
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
                                <h3> Flash <span> Sale </span> </h3>
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
                                    <div className='card card_slider service__full_box'>
                                        <div className='qodef_e_inner'>
                                            <h3 className="productCatagori_top"> Automotive <span>New </span></h3>
                                            <img src={Catagori01} alt="" />
                                            <div className='product__name__'>
                                                <h4> Wheel Rim</h4>
                                                <div className='price__'>
                                                    $ 65.00
                                                </div>
                                            </div>
                                            <div className='product__add_tocard'>
                                                Add to cart
                                            </div>
                                            <Link className='woocommerce-LoopProduct-link woocommerce-loop-product__link' to="/"></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='card card_slider service__full_box'>
                                        <div className='qodef_e_inner'>
                                            <h3 className="productCatagori_top"> Automotive <span>New </span></h3>
                                            <img className='img-fit' src={Catagori02} alt="" />
                                            <div className='product__name__'>
                                                <h4> Wheel Rim</h4>
                                                <div className='price__'>
                                                    $ 65.00
                                                </div>
                                            </div>
                                            <div className='product__add_tocard'>
                                                Add to cart
                                            </div>
                                            <Link className='woocommerce-LoopProduct-link woocommerce-loop-product__link' to="/"></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='card card_slider service__full_box'>
                                        <div className='qodef_e_inner'>
                                            <h3 className="productCatagori_top"> Automotive <span>New </span></h3>
                                            <img src={Catagori03} alt="" />
                                            <div className='product__name__'>
                                                <h4> Wheel Rim</h4>
                                                <div className='price__'>
                                                    $ 65.00
                                                </div>
                                            </div>
                                            <div className='product__add_tocard'>
                                                Add to cart
                                            </div>
                                            <Link className='woocommerce-LoopProduct-link woocommerce-loop-product__link' to="/"></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='card card_slider service__full_box'>
                                        <div className='qodef_e_inner'>
                                            <h3 className="productCatagori_top"> Automotive <span>New </span></h3>
                                            <img src={Catagori04} alt="" />
                                            <div className='product__name__'>
                                                <h4> Wheel Rim</h4>
                                                <div className='price__'>
                                                    $ 65.00
                                                </div>
                                            </div>
                                            <div className='product__add_tocard'>
                                                Add to cart
                                            </div>
                                            <Link className='woocommerce-LoopProduct-link woocommerce-loop-product__link' to="/"></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='card card_slider service__full_box'>
                                        <div className='qodef_e_inner'>
                                            <h3 className="productCatagori_top"> Automotive <span>New </span></h3>
                                            <img src={Catagori05} alt="" />
                                            <div className='product__name__'>
                                                <h4> Wheel Rim</h4>
                                                <div className='price__'>
                                                    $ 65.00
                                                </div>
                                            </div>
                                            <div className='product__add_tocard'>
                                                Add to cart
                                            </div>
                                            <Link className='woocommerce-LoopProduct-link woocommerce-loop-product__link' to="/"></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='card card_slider service__full_box'>
                                        <div className='qodef_e_inner'>
                                            <h3 className="productCatagori_top"> Automotive <span>New </span></h3>
                                            <img src={Catagori06} alt="" />
                                            <div className='product__name__'>
                                                <h4> Wheel Rim</h4>
                                                <div className='price__'>
                                                    $ 65.00
                                                </div>
                                            </div>
                                            <div className='product__add_tocard'>
                                                Add to cart
                                            </div>
                                            <Link className='woocommerce-LoopProduct-link woocommerce-loop-product__link' to="/"></Link>
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

export default FlashSale