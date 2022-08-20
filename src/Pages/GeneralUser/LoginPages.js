import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, Form, Checkbox, Modal } from 'antd';
import { RiFacebookLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";
import OTPInput, { ResendOTP } from "otp-input-react";
import BgImg from "../../assets/images/a1.png"
import axios from "../../Helper/Config";
import { createCookieInHour, COOKIE_NAME } from '../../Helper/Cookies';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { VscDebugRestart } from "react-icons/vsc";
function LoginPages() {
    // const { Option } = Select;
    const [form] = Form.useForm();
    const [loginPhone, setLoginPhone] = useState(false)
    const [loading, setLoading] = useState(false)
    const [OTP, setOTP] = useState("");
    const redirect = useNavigate();
    // Model
    const [isModalVisible, setIsModalVisible] = useState(false)
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // Model End
    const onFinish = (values) => {
        const obj = {
            user_id: `${values.user_id}`,
            password: `${values.password}`
        }

        setLoading(true)
        axios.post("/auth/login", obj)
            .then(res => {
                if (res.data.code === 200) {
                    createCookieInHour(COOKIE_NAME, res.data.data.token)
                    toast.dark(res.data.message, {
                        position: toast.POSITION.BOTTOM_RIGHT
                    });
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                    axios.interceptors.request.use(
                        config => {
                            config.headers['Authorization'] = `Bearer ${res.data.data.token}`;
                            return config;
                        },
                        error => {
                            return Promise.reject(error);
                        }
                    );
                    axios.post("/auth/me")
                        .then(res => {
                            localStorage.setItem("Username", res.data.username)
                        })
                    redirect("/")
                }
            })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="login-21 login_21_margin">
            <div className="container-fluid">
                <div className="row login-box">
                    <div className="col-lg-4">
                        <img className='login__imggg' src={BgImg} alt="" />
                    </div>
                    <div className="col-lg-8 align-self-center form-section">
                        <div className="form-inner">
                            <h3 className="animate-charcter">Login To Your Account </h3>
                            {loginPhone === false ? <> <h5 onClick={() => setLoginPhone(true)}> Login With Phone Number </h5> </> : <> </>}
                            {loginPhone === false ? <>
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
                                    <Form.Item
                                        label="User Id"
                                        name="user_id"
                                        className="form-group form-box"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your User Id!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder='User Id' className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        className="form-group form-box"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Make!',
                                            },
                                        ]}
                                    >
                                        <Input type="password" placeholder='Password' className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        className="checkbox form-group form-box"
                                    >
                                        <Checkbox >Remember me</Checkbox>
                                        <div className="form-check checkbox-theme"> </div>
                                        <Link to="/forgot-password" className="forgot-password">Forgot Password</Link>
                                    </Form.Item>
                                    <div className="form-group">
                                        <button disabled={loading}>
                                            {loading && <span className='disabled__ '> <VscDebugRestart /> Submit...</span>}
                                            {!loading && <span  className='button_login'>Login</span>}
                                        </button>
                                    </div>
                                    <ul className="social-list clearfix">
                                        <li><Link to="/" className="facebook-bg"><RiFacebookLine /></Link></li>
                                        <li><Link to="/" className="twitter-bg"><RiTwitterLine /></Link></li>
                                        <li><Link to="/" className="linkedin-bg"><RiLinkedinLine /></Link></li>
                                    </ul>
                                </Form>
                            </> : <>
                                <Form
                                    name="basic"
                                    layout="vertical"
                                    className='from_home_area'
                                    form={form}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    // onFinish={onFinish}
                                    // onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="Phone Number"
                                        name="password"
                                        className="form-group form-box"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Phone Number!',
                                            },
                                        ]}
                                    >
                                        <Input type="text" placeholder='Phone Number' className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        className="checkbox form-group form-box"
                                    >
                                        {/* <Checkbox >Remember me</Checkbox>
                                        <div className="form-check checkbox-theme"> </div>
                                        <Link to="/forgot-password" className="forgot-password">Forgot Password</Link> */}
                                    </Form.Item>
                                    <div className="form-group">
                                        {/* <button onClick={showModal} disabled={loading} className="btn-md btn-theme w-100"> */}
                                        <button onClick={showModal} disabled={loading}>
                                            {loading && (
                                                // <i
                                                //     className="fa fa-refresh fa-spin"
                                                //     style={{ marginRight: "5px" }}
                                                // />
                                                <p style={{ marginRight: "5px" }}>  01 </p>
                                            )}
                                            {loading && <span>Submit</span>}
                                            {!loading && <span>Login</span>}
                                        </button>
                                    </div>
                                    <ul className="social-list clearfix">
                                        <li><Link to="/" className="facebook-bg"><RiFacebookLine /></Link></li>
                                        <li><Link to="/" className="twitter-bg"><RiTwitterLine /></Link></li>
                                        <li><Link to="/" className="linkedin-bg"><RiLinkedinLine /></Link></li>
                                    </ul>
                                </Form>
                            </>}
                            <div className="clearfix"></div>
                            <p>Don't have an account? <Link to="/generaluser-registration" className="thembo"> Register here</Link></p>
                        </div>
                        <Modal visible={isModalVisible} onCancel={handleCancel}>
                            <OTPInput value={OTP} maxTime={true} onChange={setOTP} autoFocus OTPLength={4} otpType="any" disabled={false} secure />
                            <ResendOTP onResendClick={() => console.log("Resend clicked")} />
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPages