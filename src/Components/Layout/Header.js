import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RiCloseLine, RiHome2Line, RiUser3Line } from "react-icons/ri";
import { DownOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import axios from "../../Helper/Config";
import { Input, Modal, Form, Select, Dropdown, Menu, Space } from 'antd';
import AuthService from "../../Helper/Auth.Services"
import TopBanner from "../../assets/images/top_banner.jpg"
import Logo from "../../assets/images/logo.png"

// import useAxiosPrivate from "../../hooks/useAxiosPrivate";

// COMPONENTS
import Cart from "../Products/Cart"
import MobileCatagories from "./MobileCatagories"
function Header() {
    const userActive = AuthService.getCurrentUser();
    console.log(typeof (userActive), "userActive")
    const [BannerShow, setBannerShow] = useState(true)
    const [ActiveToken, setActiveToken] = useState(false)
    // const axiosPrivate = useAxiosPrivate();
    useEffect(() => {
        if (Number(userActive) === 0) {
            setActiveToken(false)
        } else {
            setActiveToken(true)
        }
    }, [userActive])
    useEffect(() => {
        axios.post("/auth/me")
            .then(res => {
                console.log(res, "res res")
                if (res.data.code === 200) {
                    // const token = jwt.sign({ foo: 'bar' }, 'shhhhh')
                }
            })
    }, [])

    const bannerOff = () => {
        setBannerShow(false)
    }
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const { Option } = Select;
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    console.log('Failed:', ActiveToken);
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <Link to="/"> Account Setting </Link>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <Link to="/"> Logout </Link>
                    ),
                },
            ]}
        />
    );

    return (
        <div style={{ width: "100%" }}>
            {BannerShow ? <>
                <div className='top_banner_area'>
                    <Container>
                        <Row>
                            <Col lg={12} style={{ position: "relative" }}>
                                <img src={TopBanner} alt="" />
                                <RiCloseLine onClick={bannerOff} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </> : <>  </>}
            <div className='logo_bottom_menu_area'>
                <div>
                    <div className='logo_serach_area'>
                        <Container>
                            <Row>
                                <Col xs={6} lg={4}>
                                    <div className='header_logo'>
                                        <Link to="/"> <img className='img-fit' src={Logo} alt="" /></Link>
                                        <Link to="/neearest-shop-locations">
                                            <div className='location_btn'>
                                                <span className="location-description">Your Location</span>
                                                <div className="location_text">Neearest Shop Locations</div>
                                            </div>
                                        </Link>
                                    </div>
                                </Col>
                                <Col xs={6} lg={8}>
                                    <div className='rasponsive__menu_icon'>
                                        <MobileCatagories />
                                    </div>
                                    <div className='search_all_area'>
                                        <Input size="large" placeholder="Search for anything" prefix={<SearchOutlined />} />
                                        <button className='btn__default_search'> Search </button>
                                        <button onClick={showModal} className='btn__default_search btn__default_search_advance'> Advanced </button>
                                        <Cart />
                                    </div>
                                    <Modal footer={null} className='advance_search_area' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                        <div className='home_search_area'>
                                            <Row>
                                                <Col lg={12}>
                                                    <Form
                                                        name="basic"
                                                        layout="vertical"
                                                        className='from_home_area'
                                                        form={form}
                                                        initialValues={{
                                                            remember: true,
                                                        }}
                                                        onFinish={onFinish}
                                                        onFinishFailed={onFinishFailed}
                                                        autoComplete="off"
                                                    >
                                                        <Row>
                                                            <Col lg={6}>
                                                                <Form.Item
                                                                    label="Any Make"
                                                                    name="make"
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'Please input your Make!',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Select
                                                                        placeholder="Select Make"
                                                                        allowClear
                                                                    >
                                                                        <Option value="male">Brake Calipers </Option>
                                                                        <Option value="female">Engine Oil </Option>
                                                                        <Option value="other">Motor Oil </Option>
                                                                    </Select>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <Form.Item
                                                                    label="Any Model"
                                                                    name="model"
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'Please input your Model!',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Select
                                                                        placeholder="Select Model"
                                                                        allowClear
                                                                    >
                                                                        <Option value="male">Brake Calipers </Option>
                                                                        <Option value="female">Engine Oil </Option>
                                                                        <Option value="other">Motor Oil </Option>
                                                                    </Select>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <Form.Item
                                                                    label="Years"
                                                                    name="years"
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'Please input your Years!',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Select
                                                                        placeholder="Choose Year"
                                                                        allowClear
                                                                    >
                                                                        <Option value="male">Year 2020  </Option>
                                                                        <Option value="female">Year 2021</Option>
                                                                        <Option value="other">Year 2022 </Option>
                                                                    </Select>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <Form.Item
                                                                    label="Class"
                                                                    name="class"
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'Please input your Full name!',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Select
                                                                        placeholder="Select Class"
                                                                        allowClear
                                                                    >
                                                                        <Option value="male">Class One  </Option>
                                                                        <Option value="female">Class Two  </Option>
                                                                        <Option value="other">Class Three  </Option>
                                                                    </Select>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col lg={12}>
                                                                <Form.Item
                                                                    label="Types"
                                                                    name="types"
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'Please input your Class!',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Select
                                                                        placeholder="Select Type"
                                                                        allowClear
                                                                    >
                                                                        <Option value="male">Tail Lights  </Option>
                                                                        <Option value="female">Car Covers  </Option>
                                                                        <Option value="other">Hoods   </Option>
                                                                    </Select>
                                                                </Form.Item>
                                                            </Col>
                                                            <Col lg={2}>
                                                                <button className='deafult__btn'> Search </button>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Modal>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className='top_header_menu'>
                        <Container>
                            <ul>
                                <li><Link className='color__hdr' to="/"> Home</Link></li>
                                <li><Link className='color__hdr' to="/">About</Link></li>
                                <li><Link to="/">Services</Link></li>
                                <li><Link to="/">Shop</Link></li>
                                <li><Link to="/">Contact Us</Link></li>
                                {ActiveToken === true ? <>
                                    <div className='profile_menu_header'>
                                        <Dropdown overlay={menu}>
                                            <Space>
                                                Profile Name
                                                <DownOutlined />
                                            </Space>
                                        </Dropdown>
                                    </div>
                                </> : <>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/registration">Registration</Link></li>
                                </>}
                            </ul>
                        </Container>
                    </div>
                    <div className='movile__bottom_fixted_menu'>
                        <Container>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='box__one'>
                                    <Link to="/"> <RiHome2Line /> <br></br> Home </Link>
                                </div>
                                <div className='box__one'>
                                    <Link to="/"> <Cart /><br></br> Cart </Link>
                                </div>
                                <div className='box__one'>
                                    <Link to="/"> <RiUser3Line /> <br></br> Profile </Link>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header