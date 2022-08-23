import React from 'react'
import { Input, Form } from 'antd';
import { Link } from 'react-router-dom'
import Figure78 from "../assets/images/figure78.png"
import Figure79 from "../assets/images/figure79.png"
// import CarIdRed from "../assets/images/car-in-red.png"
function ContactUs() {
    const [form] = Form.useForm();
    const { TextArea } = Input;
    const onFinish = (value) => {
        console.log('Success:', value);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <section className="breadcrumb-wrap">
                <div className="breadcrumb-img1">
                    <img src={Figure79} alt="figure" width="223" height="109" />
                </div>
                <div className="breadcrumb-img2">
                    <img src={Figure78} alt="figure" width="185" height="56" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-box">
                                <h1 className="page-title">Contact Us</h1>
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/"> Home </Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className='about__contant about__contant__txt'>
                            {/* <h3> Our Mission </h3> */}
                            <h1>Get In <span className="heading-color"> Touch </span> </h1>
                            <p style={{ paddingTop: "15px" }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className='about__contant'>
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
                                            label="Your Name"
                                            name="yName"
                                            className="form-group form-box"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Name!',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Your Name' className="form-control" />
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
                                                    message: 'Please input your email',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Email' className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-lg-6'>
                                        <Form.Item
                                            label="Contact Number"
                                            name="contactnumber"
                                            className="form-group form-box"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Contact Number',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Contact Number' className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-lg-6'>
                                        <Form.Item
                                            label="Subject"
                                            name="subject"
                                            className="form-group form-box"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Subject',
                                                },
                                            ]}
                                        >
                                            <Input placeholder='Subject' className="form-control" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-lg-12'>
                                        <Form.Item
                                            label="Message"
                                            name="message"
                                            className="form-group form-box"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Message',
                                                },
                                            ]}
                                        >
                                            <TextArea rows={4} placeholder="Message"/>
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn-md contact__btn btn-theme">Submit</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src={HeaderBg} alt="" /> */}
        </div>
    )
}

export default ContactUs