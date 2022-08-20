import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { RiCheckDoubleFill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import axios from "../../Helper/Config";
function ServicesProviderRegistration() {
    const [GrageList, SetGrageList] = useState([])
    useEffect(() => {
        axios.get("/auth/active-packages")
            .then(res => {
                SetGrageList(res.data.data)
            })
    }, [])
    console.log(GrageList, "GrageList GrageList")
    return (
        <div className='services_provider_registration_area'>
            <div className="content">
                <Container>
                    {GrageList.packages?.length > 0 ? <>
                        <Row className='data__test'>
                            <Col lg={12} className="login-21">
                                <div className="trans_title">Best <span>Plans</span> For Business</div>
                                <p className='animate-charcter'> Service Center And Garage </p>
                            </Col>
                            {GrageList.packages?.map((item, i) => (
                                <Col lg={3} key={i} className="d-flex data_one align-items-stretch">
                                    <div className="card trans_wrapper">
                                        <div className="trans_table_wrapper">
                                            <div className="trans_package_name_shape_1"></div>
                                            <div className="trans_package_name_shape_2"></div>
                                            <div className="trans_package_name">Starter</div>
                                            <div className="trans_package_highlights">
                                                <div className="trans_package_price">৳ {item?.price}<span>/ monthly</span></div>
                                                <div className="trans_package_users"><i className="fas fa-users"></i> <span>05</span> Users</div>

                                            </div>
                                            <ul className="trans_package_features">
                                                {item.features?.map((fItem, i) => (
                                                    <li key={i}> <RiCheckDoubleFill /> {fItem.feature.name} </li>
                                                ))}
                                            </ul>
                                            <div className="trans_package_button">
                                                <Link  to={`/services-provider-registration-from/${item.id}`}> Subscribe Now </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                             ))}
                        </Row>
                    </> : <> </>}


                    <Row className='parts_sellers_areaa  mt-5'>
                        <Col lg={12} className="login-21">
                            <div className="trans_title">Best <span>Plans</span> For Business</div>
                            <p className='animate-charcter'> Parts Seller </p>
                        </Col>
                        <Col lg={3} className="d-flex data_one align-items-stretch">
                            <div className="card trans_wrapper">
                                <div className="trans_table_wrapper">
                                    <div className="trans_package_name_shape_1"></div>
                                    <div className="trans_package_name_shape_2"></div>
                                    <div className="trans_package_name">Bronze</div>
                                    <div className="trans_package_highlights">
                                        <div className="trans_package_price">৳1500<span>/ monthly</span></div>
                                        <div className="trans_package_users"><i className="fas fa-users"></i> <span>05</span> Users</div>

                                    </div>
                                    <ul className="trans_package_features">
                                        <li> <RiCheckDoubleFill /> Code Minifier </li>
                                        <li><RiCheckDoubleFill /> Domain Analysis </li>
                                        <li><RiCheckDoubleFill />  IP Analysis </li>
                                        <li><RiCheckDoubleFill />  Link Analysis </li>
                                        <li><RiCheckDoubleFill /> Social Network Analysis </li>
                                        <li><RiCheckDoubleFill />  Native Widget </li>
                                        <li><RiCheckDoubleFill /> Keyword Position Tracking </li>
                                    </ul>
                                    <div className="trans_package_button">
                                        <Link to="/services-provider-registration-from"> Subscribe Now </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} className="d-flex data_one align-items-stretch">
                            <div className="card trans_wrapper">
                                <div className="trans_table_wrapper">
                                    <div className="trans_package_name_shape_1"></div>
                                    <div className="trans_package_name_shape_2"></div>
                                    <div className="trans_package_name">Sliver</div>
                                    <div className="trans_package_highlights">

                                        <div className="trans_package_price">৳2000<span>/ monthly</span></div>
                                        <div className="trans_package_users"><i className="fas fa-users"></i> <span>05</span> Users</div>

                                    </div>
                                    <ul className="trans_package_features">
                                        <li><i className="fas fa-code"></i> Code Minifier <i className="fas fa-check active"></i></li>
                                        <li><i className="fas fa-globe"></i> Domain Analysis <i className="fas fa-check active"></i></li>
                                        <li><i className="fas fa-map"></i> IP Analysis <i className="fas fa-check active"></i></li>
                                        <li><i className="fas fa-link"></i> Link Analysis <i className="fas fa-check active"></i></li>
                                        <li><i className="fas fa-users"></i>Social Network Analysis <i className="fas fa-check inactive"></i></li>
                                        <li><i className="fas fa-window-maximize"></i> Native Widget <i className="fas fa-check inactive"></i></li>
                                        <li><i className="fas fa-map-marker"></i>Keyword Position Tracking <i className="fas fa-check inactive"></i></li>
                                    </ul>
                                    <div className="trans_package_button">
                                        <Link to="/services-provider-registration-from"> Subscribe Now </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} className="d-flex data_one align-items-stretch">
                            <div className="card trans_wrapper">
                                <div className="trans_table_wrapper">
                                    <div className="trans_package_name_shape_1"></div>
                                    <div className="trans_package_name_shape_2"></div>
                                    <div className="trans_package_name">Gold</div>
                                    <div className="trans_package_highlights">

                                        <div className="trans_package_price">৳2500<span>/ monthly</span></div>
                                        <div className="trans_package_users"><i className="fas fa-users"></i> <span>05</span> Users</div>

                                    </div>
                                    <ul className="trans_package_features">
                                        <li><i className="fas fa-code"></i> Code Minifier <i className="fas fa-check active"></i></li>
                                        <li><i className="fas fa-globe"></i> Domain Analysis <i className="fas fa-check active"></i></li>
                                        <li><i className="fas fa-map"></i> IP Analysis <i className="fas fa-check active"></i></li>
                                        <li><i className="fas fa-link"></i> Link Analysis <i className="fas fa-check active"></i></li>
                                        <li><i className="fas fa-users"></i>Social Network Analysis <i className="fas fa-check inactive"></i></li>
                                        <li><i className="fas fa-window-maximize"></i> Native Widget <i className="fas fa-check inactive"></i></li>
                                        <li><i className="fas fa-map-marker"></i>Keyword Position Tracking <i className="fas fa-check inactive"></i></li>
                                    </ul>
                                    <div className="trans_package_button">
                                        <Link to="/services-provider-registration-from"> Subscribe Now </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} className="d-flex data_one align-items-stretch">
                            <div className="card trans_wrapper">
                                <div className="trans_table_wrapper">
                                    <div className="trans_package_name_shape_1"></div>
                                    <div className="trans_package_name_shape_2"></div>
                                    <div className="trans_package_name">Platinum</div>
                                    <div className="trans_package_highlights">

                                        <div className="trans_package_price">৳3500<span>/ monthly</span></div>
                                        <div className="trans_package_users"><i className="fas fa-users"></i> <span>05</span> Users</div>

                                    </div>
                                    <ul className="trans_package_features">
                                        <li><i className="fas fa-code"></i> Code Minifier <i className="fas fa-check active"></i></li>
                                        <li><i className="fas fa-globe"></i> Domain Analysis <i className="fas fa-check active"></i></li>
                                        <li><i className="fas fa-map"></i> IP Analysis <i className="fas fa-check active"></i></li>
                                        <li><i className="fas fa-link"></i> Link Analysis <i className="fas fa-check active"></i></li>
                                        <li><i className="fas fa-users"></i>Social Network Analysis <i className="fas fa-check inactive"></i></li>
                                        <li><i className="fas fa-window-maximize"></i> Native Widget <i className="fas fa-check inactive"></i></li>
                                        <li><i className="fas fa-map-marker"></i>Keyword Position Tracking <i className="fas fa-check inactive"></i></li>
                                    </ul>
                                    <div className="trans_package_button">
                                        <Link to="/services-provider-registration-from"> Subscribe Now </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ServicesProviderRegistration