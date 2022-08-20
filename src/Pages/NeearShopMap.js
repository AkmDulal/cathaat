import React, {useState} from 'react'
import { Input, Radio, Select } from 'antd';
import Iframe from 'react-iframe'

function NeearShopMap() {
    const { Search } = Input;
    const { Option } = Select;
    const [storeShow, setStoreShow] = useState(false)
    const dataSHow = (e) => {
        setStoreShow(true)
        if(e === undefined) {
            setStoreShow(false)
        }
    }
    return (
        <div div className='neer_shop_area'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-4 sNSearch'>
                        <div className='sNSearch_box'>
                            <div className='sNSearch_box_search'>
                                <Search allowClear placeholder="input search text" />
                                <Select
                                    defaultValue="Search Within"
                                    className='sNSearch_box_search_select_width'
                                    onChange={dataSHow}
                                    allowClear
                                >
                                    <Option value="1">1 Mile</Option>
                                    <Option value="2">10 Mile</Option>
                                    <Option value="3">20 Mile</Option>
                                    <Option value="4">30 Mile</Option>
                                    <Option value="5">40 Mile</Option>
                                    <Option value="6">50 Mile</Option>
                                    <Option value="7">100 Mile</Option>
                                </Select>
                                <button className='find_stor_btn'> Find a Store </button>
                            </div>
                            <h3> We are unable to access your exact location </h3>
                            <p> To find a Starbucks store, use the search feature, navigate using the map, or turn on location services. </p>
                            {storeShow === false ? <> <p className='store__p'> 0 Store </p> </> : <> 
                            <div className='kilo_mile_area'>
                                <Radio.Group >
                                    <Radio value={1}>1 Store Name</Radio>
                                    <Radio value={2}>2 Store Name</Radio>
                                    <Radio value={3}>3 Store Name</Radio>
                                    <Radio value={4}>4 Store Name</Radio>
                                    <Radio value={5}>5 Store Name</Radio>
                                </Radio.Group>
                            </div>
                            <div className='kilo_mile_area'>
                                <Radio.Group >
                                    <Radio value={1}>1 Store Name</Radio>
                                    <Radio value={2}>2 Store Name</Radio>
                                    <Radio value={3}>3 Store Name</Radio>
                                    <Radio value={4}>4 Store Name</Radio>
                                    <Radio value={5}>5 Store Name</Radio>
                                </Radio.Group>
                            </div>
                             </>}
                        </div>
                    </div>
                    <div className='col-lg-8 sNSearch'>
                        {/* <iframe scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=887&amp;height=588&amp;hl=en&amp;q=%20Dhaka+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="887" height="588" frameborder="0"></iframe> */}
                        <Iframe url="https://maps.google.com/maps?width=887&amp;height=588&amp;hl=en&amp;q=%20Dhaka+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            width="88%"
                            height="450px"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NeearShopMap