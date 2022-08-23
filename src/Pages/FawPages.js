import React from 'react'
// import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Link } from 'react-router-dom'
function FawPages() {
    const { Search } = Input;
    return (
        <div className='faq__pages'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h3> How can we help you? </h3>
                        <Search
                            placeholder="input search text"
                            allowClear
                            enterButton="Search"
                            size="large"
                        />
                        <h4> You can also browser the topics below to find what you are looking for </h4>
                    </div>
                    <div className='col-lg-3 d-flex align-items-stretch'>
                        <div className='card f_faq_box'>
                            <h5> General </h5>
                            <Link to="/faq-details"> General Category 1 </Link>
                            <Link to="/faq-details"> General Category 2 </Link>
                            <Link to="/faq-details"> General Category 3 </Link>
                        </div>
                    </div>
                    <div className='col-lg-3 d-flex align-items-stretch'>
                        <div className='card f_faq_box'>
                            <h5> General </h5>
                            <Link to="/faq-details"> General Category 1 </Link>
                            <Link to="/faq-details"> General Category 2 </Link>
                            <Link to="/faq-details"> General Category 3 </Link>
                        </div>
                    </div>
                    <div className='col-lg-3 d-flex align-items-stretch'>
                        <div className='card f_faq_box'>
                            <h5> General </h5>
                            <Link to="/faq-details"> General Category 1 </Link>
                            <Link to="/faq-details"> General Category 2 </Link>
                            <Link to="/faq-details"> General Category 3 </Link>
                        </div>
                    </div>
                    <div className='col-lg-3 d-flex align-items-stretch'>
                        <div className='card f_faq_box'>
                            <h5> General </h5>
                            <Link to="/faq-details"> General Category 1 </Link>
                            <Link to="/faq-details"> General Category 2 </Link>
                            <Link to="/faq-details"> General Category 3 </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FawPages