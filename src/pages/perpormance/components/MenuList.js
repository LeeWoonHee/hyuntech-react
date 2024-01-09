import LocomotiveScroll from 'locomotive-scroll';
import React, { useEffect, useRef } from 'react';
import { performanceClickIndex } from 'pages/recoil/recoilState';
import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MenuList = () => {
  const {t} = useTranslation();
  const [clickIndex, setClickIndex] = useRecoilState(performanceClickIndex);
  const scroll = useRef(null);
  const footerIndex = useLocation().state;

  useEffect(() => {
    scroll.current = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true,
    });
    return () => {
      scroll.current.destroy();
    }
  }, []);

  useEffect(() => {
    const target = document.querySelectorAll('.performance-item');
    scroll.current.scrollTo(target[clickIndex], 0, 0);
  }, [clickIndex]);
  useEffect(() => {
    const target = document.querySelectorAll('.performance-item');
    scroll.current.scrollTo(target[footerIndex], 0, 0);
  }, [footerIndex]);

  const performanceMenus = [
    {
      image: require('assets/images/performance-calorimeter.png'),
      title: 'capacityTester.title.1',
      desc: 'capacityTester.dec.1'
    },
    {
      image: require('assets/images/performance-refrigerator.png'),
      title: 'capacityTester.title.2',
      desc: 'capacityTester.dec.2'
    },
    {
      image: require('assets/images/performance-airflow.png'),
      title: 'capacityTester.title.3',
      desc:'capacityTester.dec.3' 
    },
    {
      image: require('assets/images/performance-washer.png'),
      title: 'capacityTester.title.4',
      desc:'capacityTester.dec.4'
    },
    {
      image: require('assets/images/performance-gas.png'),
      title: 'capacityTester.title.5',
      desc: 'capacityTester.dec.5'
    }
  ]
  return (
    <div className="performance-list" style={{ backgroundColor: '#fdfdfd' }}>
      {performanceMenus.map((item, index) => (
        <div
          key={index}
          className={`performance-item ${window.innerWidth < 1024 ? 'px-0' : ''}`}
          style={{ backgroundColor: '#fdfdfd' }}
        >
          {/* 제품 이미지 */}
          <div className="image">
            <img src={item.image} alt="" className="blex" />
          </div>
          <div className="title-box">
            {/* 제품 타이틀 */}
            <div className="top-title">{t(`${item.title}`)}</div>
            {/* 제품 설명 */}
            <div className="dec">{t(`${item.desc}`)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;