import React, { useState } from 'react';
import { Drawer, Menu } from 'antd';
import { FcLink } from "react-icons/fc";
import { RiBarChartHorizontalLine } from "react-icons/ri";
function MobileCatagories() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Brake Parts ', 'sub1', <FcLink />, [
      getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
      getItem('Item 2', null, null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),
    getItem('Wheels & Tires ', 'sub2', <FcLink />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Furnitured & Decor ', 'sub4', <FcLink />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
    getItem('Turbo System ', 'sub5', <FcLink />, [
      getItem('Option 9', '13'),
      getItem('Option 10', '14'),
      getItem('Option 11', '15'),
      getItem('Option 12', '16'),
    ]),
    getItem('Lighting', 'sub6', <FcLink />, [
      getItem('Option 9', '17'),
      getItem('Option 10', '18'),
      getItem('Option 11', '19'),
      getItem('Option 12', '20'),
    ]),
    getItem('Accessories', 'sub7', <FcLink />, [
      getItem('Option 9', '21'),
      getItem('Option 10', '22'),
      getItem('Option 11', '23'),
      getItem('Option 12', '24'),
    ]),
    getItem('Body Parts', 'sub8', <FcLink />, [
      getItem('Option 9', '25'),
      getItem('Option 10', '26'),
      getItem('Option 11', '27'),
      getItem('Option 12', '28'),
    ]),
    getItem('Perfomance Filters', 'sub9', <FcLink />, [
      getItem('Option 9', '29'),
      getItem('Option 10', '30'),
      getItem('Option 11', '31'),
      getItem('Option 12', '32'),
    ]),
  ];
  return (
    <div>
      <RiBarChartHorizontalLine onClick={showDrawer} />

      <Drawer title="CarHaat" placement="right" onClose={onClose} visible={visible}>
        <Menu
          style={{
            width: 320,
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </Drawer>
    </div>
  )
}

export default MobileCatagories