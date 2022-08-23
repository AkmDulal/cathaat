import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Form, Input, } from "antd";
import  CheckoutPage from "./CheckoutPage";
import { RiCheckDoubleFill } from "react-icons/ri";
import axios from "../../Helper/Config";
// import { Link } from 'react-router-dom'
function SubscriptionPackagFrom() {
    const [stepForm] = Form.useForm();
    const [form] = Form.useForm();
    const [ServiceName, SetServiceName] = useState([])
    const { id } = useParams();
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    form.setFieldsValue({
        // cFirstName: FromeList,
        clastName: "Customer Last Name",
        cEmail: "customer@gamil.com",
        cContactno: "0123456789",
        cAddress: "23, Ring Road, Shamoli, Dhaka",
    });
    const onFinish = (fieldsValue) => {
        const formData = stepForm.getFieldsValue();
        console.log(formData);
    };
    useEffect(() => {
        axios.get("/auth/active-packages")
            .then(res => {
                const foundData = res.data.data.packages.find(obj => obj.id === Number(id))
                SetServiceName(foundData)
            })
    }, [])
    return (
        <div className='subscriptionPackagFrom__area'>
            <Container>
                <Row>
                    <Col lg={3} className="d-flex align-items-stretch">
                        <div className='card subscriptionPackagFrom__text'>
                            {/* <h3 className='subscriptionPackagFrom__text_h3'> Selected Package </h3> */}
                            <div className='subscriptionPackagFrom__contant'>
                                <h3> {ServiceName.name} </h3>
                                <p> Service Center </p>
                            </div>
                            <div className='subscriptionPackagFrom__contant'>
                                {/* <div className='subscriptionPackagFrom_pkg'>
                                    <h3> Package </h3>
                                    <p> Basic </p>
                                </div> */}
                                <div className='subscriptionPackagFrom_price'>
                                    <h3> Price </h3>
                                    <p> ৳{ServiceName.price} </p>
                                </div>
                            </div>
                            <div className='subscriptionPackagFrom__contant'>
                                <h3> Details </h3>
                                <ul>
                                    {ServiceName.features?.map((fItem, i) => (
                                        <li key={i}> <RiCheckDoubleFill /> {fItem.feature.name} </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col lg={9} className="d-flex align-items-stretch">
                        <div className='card subscriptionPackagFrom__from'>
                            <CheckoutPage />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SubscriptionPackagFrom