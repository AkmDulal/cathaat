import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RiHeartFill, RiShoppingCartLine, RiEyeFill } from "react-icons/ri";
// Images
import Product01 from "../../assets/images/product/p01.png"
import Product02 from "../../assets/images/product/p02.png"
import Product03 from "../../assets/images/product/p03.png"
import Product04 from "../../assets/images/product/p04.png"
import Product05 from "../../assets/images/product/p05.png"

// import { RiArrowDropDownFill } from "react-icons/ri";

export class PartsInventory extends Component {
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
                                <h3> Parts <span> Inventory </span> </h3>
                            </div>
                            <OwlCarousel className='owl-theme'
                                loop
                                margin={10}
                                nav={false}
                                dots={false}
                                autoplay={false}
                                autoplayTimeout={5000}
                                responsive={this.state.responsive}>
                                <div className='item'>
                                    <div className='single_parts_area'>
                                        <div className='dis__top_area'>
                                            <div className='sale__dis'> sale </div>
                                            <div className='new__dis'> new </div>
                                            <div className='hot__dis'> Hot </div>
                                        </div>
                                        <div className='image__body'>
                                            <Link to="/">
                                                <img className='image__body img-fit' src={Product01} alt="" />
                                            </Link>
                                        </div>
                                        <div className='product__icon__'>
                                            <button> <RiEyeFill /></button>
                                            <button><RiHeartFill /> </button>
                                        </div>
                                        <div className='product-card__info'>
                                            <div className='product-card_sku'>
                                                <span>SKU :</span>   521-57812-H 
                                            </div>
                                            <div className='product-card__name'>
                                                <Link to="/"> Taillights Brandix Z54 </Link>
                                            </div>
                                        </div>
                                        <div className='product-card__footer'>
                                            <h3> $60.00 </h3>
                                            <RiShoppingCartLine className='svg__hover' />
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='single_parts_area'>
                                        <div className='dis__top_area'>
                                            <div className='sale__dis'> sale </div>
                                            <div className='new__dis'> new </div>
                                        </div>
                                        <div className='image__body'>
                                            <Link to="/">
                                                <img className='image__body img-fit' src={Product02} alt="" />
                                            </Link>
                                        </div>
                                        <div className='product__icon__'>
                                            <button> <RiEyeFill /></button>
                                            <button><RiHeartFill /> </button>
                                        </div>
                                        <div className='product-card__info'>
                                            <div className='product-card_sku'>
                                                <span>SKU :</span>   521-57812-H 
                                            </div>
                                            <div className='product-card__name'>
                                                <Link to="/"> Taillights Brandix Z54 </Link>
                                            </div>
                                        </div>
                                        <div className='product-card__footer'>
                                            <h3> $60.00 </h3>
                                            <RiShoppingCartLine className='svg__hover' />
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='single_parts_area'>
                                        <div className='image__body'>
                                            <Link to="/">
                                                <img className='image__body img-fit' src={Product03} alt="" />
                                            </Link>
                                        </div>
                                        <div className='product__icon__'>
                                            <button> <RiEyeFill /></button>
                                            <button><RiHeartFill /> </button>
                                        </div>
                                        <div className='product-card__info'>
                                            <div className='product-card_sku'>
                                                <span>SKU :</span>   521-57812-H 
                                            </div>
                                            <div className='product-card__name'>
                                                <Link to="/"> Taillights Brandix Z54 </Link>
                                            </div>
                                        </div>
                                        <div className='product-card__footer'>
                                            <h3> $60.00 </h3>
                                            <RiShoppingCartLine className='svg__hover' />
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='single_parts_area'>
                                        <div className='dis__top_area'>
                                            <div className='sale__dis'> sale </div>
                                            <div className='new__dis'> new </div>
                                        </div>
                                        <div className='image__body'>
                                            <Link to="/">
                                                <img className='image__body img-fit' src={Product04} alt="" />
                                            </Link>
                                        </div>
                                        <div className='product__icon__'>
                                            <button> <RiEyeFill /></button>
                                            <button><RiHeartFill /> </button>
                                        </div>
                                        <div className='product-card__info'>
                                            <div className='product-card_sku'>
                                                <span>SKU :</span>   521-57812-H 
                                            </div>
                                            <div className='product-card__name'>
                                                <Link to="/"> Taillights Brandix Z54 </Link>
                                            </div>
                                        </div>
                                        <div className='product-card__footer'>
                                            <h3> $60.00 </h3>
                                            <RiShoppingCartLine className='svg__hover' />
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='single_parts_area'>
                                        <div className='dis__top_area'>
                                            <div className='sale__dis'> sale </div>
                                        </div>
                                        <div className='image__body'>
                                            <Link to="/">
                                                <img className='image__body img-fit' src={Product05} alt="" />
                                            </Link>
                                        </div>
                                        <div className='product__icon__'>
                                            <button> <RiEyeFill /></button>
                                            <button><RiHeartFill /> </button>
                                        </div>
                                        <div className='product-card__info'>
                                            <div className='product-card_sku'>
                                                <span>SKU :</span>   521-57812-H 
                                            </div>
                                            <div className='product-card__name'>
                                                <Link to="/"> Taillights Brandix Z54 </Link>
                                            </div>
                                        </div>
                                        <div className='product-card__footer'>
                                            <h3> $60.00 </h3>
                                            <RiShoppingCartLine className='svg__hover' />
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

export default PartsInventory