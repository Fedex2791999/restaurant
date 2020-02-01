import React, { useState, useEffect } from 'react';
import KindOfFood from '../components/food/KindOfFood';
import TabFood from '../components/food/TabFood';
import axios from 'axios';

export default function DeliciousArea() {
  const [listHotPot, setListHotPot] = useState([]);
  const [listGrill, setListGrill] = useState([]);
  const [listDessert, setListDessert] = useState([]);
  console.log(listHotPot);
  console.log(listGrill);
  console.log(listDessert);
  const listMenu = [
    {
      name: 'Lẩu',
      icon: 'flaticon-lunch',
      ariaSelected: 'false',
      ariaControls: 'pills-home',
      href: '#pills-home',
      id: 'pills-home-tab'
    },
    {
      name: 'Nướng',
      icon: 'flaticon-kitchen',
      ariaSelected: 'false',
      ariaControls: 'pills-contact',
      href: '#pills-contact',
      id: 'pills-contact-tab'
    },
    {
      name: 'Tráng Miệng',
      icon: 'flaticon-food',
      ariaSelected: 'false',
      ariaControls: 'pills-profile',
      href: '#pills-profile',
      id: 'pills-profile-tab'
    }
  ];
  const listTab = [
    {
      id: 'pills-home',
      ariaLabelledby: 'pills-home-tab',
      listItem: listHotPot,
      type: 'hotpot'
    },
    {
      id: 'pills-profile',
      ariaLabelledby: 'pills-profile-tab',
      listItem: listDessert,
      type: 'dessert'
    },
    {
      id: 'pills-contact',
      ariaLabelledby: 'pills-contact-tab',
      listItem: listGrill,
      type: 'grill'
    }
  ];

 
  useEffect(() => {
    axios.get(' /hotpot').then(res => {
      const data = res.data;
      setListHotPot(data);
    });
    axios
      .get(' /grill')
      .then(res => {
        const data = res.data;
        setListGrill(data);
      })
      .catch(err => console.log('Hỏng rồi'));
    axios
      .get(' /dessert')
      .then(res => {
        const data = res.data;
        setListDessert(data);
      })
      .catch(err => console.log('Hỏng rồi'));
  },[]);

  return (
    <div className="Delicious_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-50">
              <h3>Thực Đơn </h3>
            </div>
          </div>
        </div>
        <div className="tablist_menu">
          <div className="row">
            <div className="col-xl-12">
              <ul
                className="nav justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                {listMenu.map((item, index) => (
                  <KindOfFood item={item} key={index} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          {listTab.map((item, index) => (
            <TabFood key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
