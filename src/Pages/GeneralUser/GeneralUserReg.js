import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Form } from 'antd';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from "../../Helper/Config";

function GeneralUserReg() {
    // const { Option } = Select;
    const [form] = Form.useForm();
    const redirect = useNavigate();
    const onFinish = (values) => {
        const obj = {
            first_name: `${values.first_name}`,
            last_name: `${values.last_name}`,
            username: `${values.username}`,
            email: `${values.email}`,
            phone_number: `${values.phone_number}`,
            password: `${values.confirm_password}`
        }
        console.log(obj, "obj obj")
        axios.post("/auth/general-user-register", obj, {
            header: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(res => {
                toast.dark(res.data.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
                redirect("/login")
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="login-21 ger___from__21">
            <div className="ger___from">
                <h3 className="animate-charcter">General User Registration Form</h3>
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
                    <div className='row'>
                        <div className='col-lg-6'>
                            <Form.Item
                                label="First Name"
                                name="first_name"
                                className="form-group form-box"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input First Name!',
                                    },
                                ]}
                            >
                                <Input className="form-control" />
                            </Form.Item>
                        </div>
                        <div className='col-lg-2'>
                            <Form.Item
                                label="Last Name"
                                name="last_name"
                                className="form-group form-box"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input Last Name!',
                                    },
                                ]}
                            >
                                <Input className="form-control" />
                            </Form.Item>
                        </div>
                        <div className='col-lg-4'>
                            <Form.Item
                                label="User Name"
                                name="username"
                                className="form-group form-box"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input User Name!',
                                    },
                                ]}
                            >
                                <Input className="form-control" />
                            </Form.Item>
                        </div>
                        <div className='col-lg-6'>
                            <Form.Item
                                label="Email"
                                name="email"
                                className="form-group form-box"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input Email!',
                                    },
                                ]}
                            >
                                <Input className="form-control" />
                            </Form.Item>
                        </div>
                        <div className='col-lg-6'>
                            <Form.Item
                                label="Contact No"
                                name="phone_number"
                                className="form-group form-box"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input Contact No!',
                                    },
                                ]}
                            >
                                <Input type="number" className="form-control" />
                            </Form.Item>
                        </div>
                        <div className='col-lg-6'>
                            <Form.Item
                                name="password"
                                label="Password"
                                className="form-group form-box"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password className="form-control" />
                            </Form.Item>
                        </div>
                        <div className='col-lg-6'>
                            <Form.Item
                                name="confirm_password"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn-md btn-theme regBTn">Submit</button>
                            <p className='from__bottom_txt'>Don't have an account? <Link to="/login" className="thembo"> Login here</Link></p>
                        </div>
                    </div>
                </Form>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}

export default GeneralUserReg