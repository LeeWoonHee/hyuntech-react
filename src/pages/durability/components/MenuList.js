import LocomotiveScroll from 'locomotive-scroll';
import { durabilityClickIndex } from 'pages/recoil/recoilState';
import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MenuList = () => {
  const {t} = useTranslation();
  const [clickIndex, setClickIndex] = useRecoilState(durabilityClickIndex);
  const footerIndex = useLocation().state;
  const scroll = useRef(null);

  useEffect(() => {
    scroll.current = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true,
    });

    return () => {
      scroll.current.destroy();
    };
  }, []);

  useEffect(() => {
    const target = document.querySelectorAll('.durability-item');
    scroll.current.scrollTo(target[clickIndex], 0, 0);
  }, [clickIndex]);

  useEffect(() => {
    const target = document.querySelectorAll('.durability-item');
    scroll.current.scrollTo(target[footerIndex], 0, 0);
  }, [footerIndex]);

  const DurabilityMenus = [
    {
      image: require('assets/images/durability-temperature.png'),
      title: 'durabilityTester.title.1',
      desc : 'durabilityTester.dec.1'
    },
    {
      image: require('assets/images/durability-waterbath.png'),
      title: 'durabilityTester.title.2',
      desc : 'durabilityTester.dec.2'
    },
    {
      image: require('assets/images/durability-saltwater.png'),
      title: 'durabilityTester.title.3',
      desc : 'durabilityTester.dec.3'
    },
    {
      image: require('assets/images/durability-battery.png'),
      title: 'durabilityTester.title.4',
      desc : 'durabilityTester.dec.4',
    },
    {
      image: require('assets/images/durability-cleaner.png'),
      title: 'durabilityTester.title.5',
      desc : 'durabilityTester.dec.5'
    },
    {
      image: require('assets/images/durability-door.png'),
      title: 'durabilityTester.title.6',
      desc : 'durabilityTester.dec.6'
    },
    {
      image: require('assets/images/durability-controller.png'),
      title: 'durabilityTester.title.7',
      desc : 'durabilityTester.dec.7'
    },
    {
      image: require('assets/images/durability-vibration.png'),
      title: 'durabilityTester.title.8',
      desc : 'durabilityTester.dec.8',
    },
    {
      image: require('assets/images/durability-8m.png'),
      title: 'durabilityTester.title.9',
      desc : 'durabilityTester.dec.9',
    },
    {
      image: require('assets/images/durability-dust.png'),
      title: 'durabilityTester.title10',
      desc : 'durabilityTester.dec.10'
    }
  ]
  return (
    <div className="durability-list" style={{ backgroundColor: '#fdfdfd' }}>
    {DurabilityMenus.map((item, index) => (
      <div
        key={index}
        className={`durability-item ${window.innerWidth < 1024 ? 'px-0' : ''}`}
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
    {/* <ScrollTopButton /> */}
  </div>
  );
};

export default MenuList;