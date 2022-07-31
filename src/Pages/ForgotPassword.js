import React from 'react'
import { Input, Form } from 'antd';
function ForgotPassword() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='forget__area__'>
            <div className='forgot_password_area'>
                <h3> Reset Your Password </h3>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  </p>
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
                        <div className='col-lg-12'>
                            <Form.Item
                                name="FirstName"
                                className="form-group form-box"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input First Name!',
                                    },
                                ]}
                            >
                                <Input placeholder='Email' className="form-control" />
                            </Form.Item>
                        </div>
                        <button> Submit </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default ForgotPassword