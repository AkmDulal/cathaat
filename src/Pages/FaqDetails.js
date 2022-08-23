import React from 'react'
// import { AudioOutlined } from '@ant-design/icons';
import { Input, Collapse } from 'antd';
import { Link } from 'react-router-dom'
function FaqDetails() {
    const { Search } = Input;
    const { Panel } = Collapse;
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
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
                    <div className='col-lg-12'>
                        <div className='f_faq_box f_faq_box_details'>
                            <h5> Frequently Asked Questions </h5>
                            <p> <Link style={{width: "auto"}} to="/"> FAQ - </Link> <Link to="/" style={{width: "auto"}}> General - </Link> General Category 1 </p>
                            <Collapse defaultActiveKey={['1']}>
                                <Panel header="This is panel header 1" key="1">
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="This is panel header 2" key="2">
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="This is panel header 3" key="3">
                                    <p>{text}</p>
                                </Panel>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqDetails