import { Drawer } from 'antd';
import React, { useState } from 'react';
import { RiShoppingBasketLine } from "react-icons/ri";
import { Link } from 'react-router-dom'

function Cart() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div>
            <button onClick={showDrawer} className='cart__header'> <RiShoppingBasketLine /> <span> 03 </span> </button>
            <div className='cart_drawer_area'>
                <Drawer className='cart_drawer_area' placement="right" onClose={onClose} visible={visible}>
                    <div className='cart__area'>
                        <div className='cart__header_home'>
                            <h3> Shopping Cart </h3>
                            <p>  The organic foods products are limited </p>
                        </div>
                        <div className='minicart__product'>
                            <div className='minicart__product--items d-flex'>
                                <div className='minicart__thumb'>
                                    <Link to="/">
                                        <img className='img-fit' src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product1.webp" alt="" />
                                    </Link>
                                </div>
                                <div className='minicart__text'>
                                    <h4 className='minicart__subtitle'> Car & Motorbike Care. </h4>
                                    <div className="minicart__price">
                                        <span className="minicart__current--price">$125.00</span>
                                        <span className="minicart__old--price">$140.00</span>
                                    </div>
                                    <div className="minicart__text--footer d-flex align-items-center">
                                        <div className="quantity__box minicart__quantity">
                                            <button type="button" className="quantity__value decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                            <label>
                                                <input type="number" className="quantity__number" value="1" data-counter="" />
                                            </label>
                                            <button type="button" className="quantity__value increase" aria-label="quantity value" value="Increase Value">+</button>
                                        </div>
                                        <button className="minicart__product--remove" type="button">Remove</button>
                                    </div>
                                </div>
                            </div>
                            <div className='minicart__product--items d-flex'>
                                <div className='minicart__thumb'>
                                    <Link to="/">
                                        <img className='img-fit' src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product1.webp" alt="" />
                                    </Link>
                                </div>
                                <div className='minicart__text'>
                                    <h4 className='minicart__subtitle'> Car & Motorbike Care. </h4>
                                    <div className="minicart__price">
                                        <span className="minicart__current--price">$125.00</span>
                                        <span className="minicart__old--price">$140.00</span>
                                    </div>
                                    <div className="minicart__text--footer d-flex align-items-center">
                                        <div className="quantity__box minicart__quantity">
                                            <button type="button" className="quantity__value decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                            <label>
                                                <input type="number" className="quantity__number" value="1" data-counter="" />
                                            </label>
                                            <button type="button" className="quantity__value increase" aria-label="quantity value" value="Increase Value">+</button>
                                        </div>
                                        <button className="minicart__product--remove" type="button">Remove</button>
                                    </div>
                                </div>
                            </div>
                            <div className='minicart__product--items d-flex'>
                                <div className='minicart__thumb'>
                                    <Link to="/">
                                        <img className='img-fit' src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product1.webp" alt="" />
                                    </Link>
                                </div>
                                <div className='minicart__text'>
                                    <h4 className='minicart__subtitle'> Car & Motorbike Care. </h4>
                                    <div className="minicart__price">
                                        <span className="minicart__current--price">$125.00</span>
                                        <span className="minicart__old--price">$140.00</span>
                                    </div>
                                    <div className="minicart__text--footer d-flex align-items-center">
                                        <div className="quantity__box minicart__quantity">
                                            <button type="button" className="quantity__value decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                            <label>
                                                <input type="number" className="quantity__number" value="1" data-counter="" />
                                            </label>
                                            <button type="button" className="quantity__value increase" aria-label="quantity value" value="Increase Value">+</button>
                                        </div>
                                        <button className="minicart__product--remove" type="button">Remove</button>
                                    </div>
                                </div>
                            </div>
                            <div className='minicart__product--items d-flex'>
                                <div className='minicart__thumb'>
                                    <Link to="/">
                                        <img className='img-fit' src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/product/small-product/product1.webp" alt="" />
                                    </Link>
                                </div>
                                <div className='minicart__text'>
                                    <h4 className='minicart__subtitle'> Car & Motorbike Care. </h4>
                                    <div className="minicart__price">
                                        <span className="minicart__current--price">$125.00</span>
                                        <span className="minicart__old--price">$140.00</span>
                                    </div>
                                    <div className="minicart__text--footer d-flex align-items-center">
                                        <div className="quantity__box minicart__quantity">
                                            <button type="button" className="quantity__value decrease" aria-label="quantity value" value="Decrease Value">-</button>
                                            <label>
                                                <input type="number" className="quantity__number" value="1" data-counter="" />
                                            </label>
                                            <button type="button" className="quantity__value increase" aria-label="quantity value" value="Increase Value">+</button>
                                        </div>
                                        <button className="minicart__product--remove" type="button">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="minicart__amount">
                            <div className="minicart__amount_list d-flex justify-content-between">
                                <span>Sub Total:</span>
                                <span><b>$240.00</b></span>
                            </div>
                            <div className="minicart__amount_list d-flex justify-content-between">
                                <span>Total:</span>
                                <span><b>$240.00</b></span>
                            </div>
                        </div>
                        <div className="minicart__conditions text-center">
                            <input className="minicart__conditions--input" id="accept" type="checkbox" />
                            <label className="minicart__conditions--label" for="accept">I agree with the <Link to="/" class="minicart__conditions--link">Privacy Policy</Link></label>
                        </div>
                        <div className='minicart__button d-flex justify-content-center'>
                        <button className='minicart__button__link'> View Cart </button>
                        <button className='minicart__button__link'> Checkout </button>
                        </div>
                    </div>
                </Drawer>
            </div>
        </div>
    )
}

export default Cart