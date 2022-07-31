import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Form } from 'antd';

function GeneralUserReg() {
    // const { Option } = Select;
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
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
                                name="FirstName"
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
                        <div className='col-lg-6'>
                            <Form.Item
                                label="Last Name"
                                name="lastName"
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
                                name="contactno"
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
                                name="confirm"
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