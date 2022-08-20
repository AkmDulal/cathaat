import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { PageHeader, Form, Input, Radio } from "antd";
import { StepPanel } from "./StepPanel";
import { RiCheckDoubleFill } from "react-icons/ri";
// import { Link } from 'react-router-dom'
function SubscriptionPackagFrom() {
    const [stepForm] = Form.useForm();
    const [form] = Form.useForm();
    const { TextArea } = Input;
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    form.setFieldsValue({
        cFirstName: "Customer Name",
        clastName: "Customer Last Name",
        cEmail: "customer@gamil.com",
        cContactno: "0123456789",
        cAddress: "23, Ring Road, Shamoli, Dhaka",
    });
    const Step1Form = () => {
        return (
            <>
                <div className='subscription_f_from'>
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
                            <div className='col-lg-12'>
                                <Form.Item
                                    label="Address"
                                    name="contactno"
                                    className="form-group form-box"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input Contact No!',
                                        },
                                    ]}
                                >
                                    <TextArea className="form-control" rows={4} />
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                </div>
            </>
        );
    };

    const Step2Form = () => {
        return (
            <>
                <div className='subscription_f_from'>
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
                                    name="cFirstName"
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
                                    name="clastName"
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
                                    name="cEmail"
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
                                    name="cContactno"
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
                            <div className='col-lg-12'>
                                <Form.Item
                                    label="Address"
                                    name="cAddress"
                                    className="form-group form-box"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input Contact No!',
                                        },
                                    ]}
                                >
                                    <TextArea className="form-control" rows={4} />
                                </Form.Item>
                            </div>
                            <div className='col-lg-12'>
                                <Form.Item
                                    label="Payment Method"
                                    name="cPaymentMethod"
                                    className="form-group form-box"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input Payment Method!',
                                        },
                                    ]}
                                >
                                    <Radio.Group style={{ textAlign: "left" }}>
                                        {/* <Radio defaultChecked={false} value={1}>Credit/Debit</Radio> */}
                                        <Radio value={2}>bKash</Radio>
                                        <Radio value={3}>Rocket</Radio>
                                        {/* <Radio defaultChecked={false} value={4}>Offline Payment</Radio> */}
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                </div>
            </>
        );
    };
    const Step3Form = () => {
        return (
            <>
                <div className='subscription_f_from'>
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
                            <div className='col-lg-12'>
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
                                    <TextArea className="form-control" rows={4} />
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                </div>
            </>
        );
    };
    const Step4Form = () => {
        return (
            <>
                <div className='subscription_f_from'>
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
                            <div className='col-lg-12'>
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
                                    <TextArea className="form-control" rows={4} />
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                </div>
            </>
        );
    };
    const onFinish = (fieldsValue) => {
        const formData = stepForm.getFieldsValue();

        // POST the data to backend and show Notification
        console.log(formData);
    };

    const steps = [
        {
            title: "Form Fill-Up",
            content: <Step1Form />
        },
        {
            title: "Confirmation",
            content: <Step2Form />
        },
        {
            title: "Payment",
            content: <Step3Form />
        },
        {
            title: "Success",
            content: <Step4Form />
        }
    ];
    return (
        <div className='subscriptionPackagFrom__area'>
            <Container>
                <Row>
                    <Col lg={3} className="d-flex align-items-stretch">
                        <div className='card subscriptionPackagFrom__text'>
                            <h3 className='subscriptionPackagFrom__text_h3'> Selected Package </h3>
                            <div className='subscriptionPackagFrom__contant'>
                                <h3> Service Provider </h3>
                                <p> Service Center </p>
                            </div>
                            <div className='subscriptionPackagFrom__contant'>
                                <div className='subscriptionPackagFrom_pkg'>
                                    <h3> Package </h3>
                                    <p> Basic </p>
                                </div>
                                <div className='subscriptionPackagFrom_price'>
                                    <h3> Price </h3>
                                    <p> ৳2000 </p>
                                </div>
                            </div>
                            <div className='subscriptionPackagFrom__contant'>
                                <h3> Details </h3>
                                <ul>
                                    <li> <RiCheckDoubleFill /> 6 Month Subscription </li>
                                    <li><RiCheckDoubleFill /> Unlimited item Showcasing </li>
                                    <li><RiCheckDoubleFill />  Online & Offline Booking </li>
                                    <li><RiCheckDoubleFill />  Reports </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9} className="d-flex align-items-stretch">
                        <div className='card subscriptionPackagFrom__from'>
                            <PageHeader title="Subscription Form Fill-up">
                                <Form form={stepForm} onFinish={onFinish}>
                                    <StepPanel steps={steps} />
                                </Form>
                            </PageHeader>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SubscriptionPackagFrom