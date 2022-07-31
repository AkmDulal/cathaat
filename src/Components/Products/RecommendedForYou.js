import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import { RiHeartFill, RiShoppingCartLine, RiEyeFill } from "react-icons/ri";
import data from "../../data.json"
function RecommendedForYou() {
    const [visible, setVisible] = useState(12);
    const loadmore = () => {
        setVisible((prevValue) => prevValue + 6);
    }

    return (
        <div className='home_category_area'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='three_catagori_box'>
                            <div className='setion____title'>
                                <h3> Recommended <span> For You </span> </h3>
                            </div>
                            <Row>
                                {data.products.slice(0, visible).map((item, i) =>
                                    <Col sm={6} lg={2} className="d-flex align-items-stretch mt-3" key={i}>
                                        <Link className='card' style={{ border: "none" }} to="/product-categories">
                                            <div className='single_parts_area'>
                                                <div className='dis__top_area'>
                                                    <div className='sale__dis'> sale </div>
                                                    {/* <div className='new__dis'> new </div> */}
                                                </div>
                                                <div className='image__body'>
                                                    <Link to="/">
                                                        <img className='image__body img-fit' src={item.images} alt="" />
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
                                        </Link>
                                    </Col>
                                )}
                                <Col lg={12} className="justy-contant-center">
                                    {data.products.length > visible ? <>
                                        <button className="loadMore__btn" type="button" onClick={loadmore}> Load More </button> </> :
                                        <>  </>}
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RecommendedForYou