import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Form, Checkbox } from 'antd';
import { RiFacebookLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";
import BgImg from "../../assets/images/a1.png"
function LoginPages() {
    // const { Option } = Select;
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="login-21">
            <div className="container-fluid">
                <div className="row login-box">
                    <div className="col-lg-4">
                        <img className='login__imggg' src={BgImg} alt="" />
                    </div>
                    <div className="col-lg-8 align-self-center form-section">
                        <div className="form-inner">
                            <h3 className="animate-charcter">Login To Your Account </h3>
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
                                    name="userid"
                                    label="User Id"
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
                                    <button type="submit" className="btn-md btn-theme w-100">Login</button>
                                </div>
                                <ul className="social-list clearfix">
                                    <li><Link to="/" className="facebook-bg"><RiFacebookLine /></Link></li>
                                    <li><Link to="/" className="twitter-bg"><RiTwitterLine /></Link></li>
                                    <li><Link to="/" className="linkedin-bg"><RiLinkedinLine /></Link></li>
                                </ul>
                            </Form>
                            <div className="clearfix"></div>
                            <p>Don't have an account? <Link to="/generaluser-registration" className="thembo"> Register here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPages