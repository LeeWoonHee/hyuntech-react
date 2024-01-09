import LocomotiveScroll from 'locomotive-scroll';
import React, { useEffect, useRef } from 'react';
import { performanceClickIndex } from 'pages/recoil/recoilState';
import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';

const MenuList = () => {
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
      title: 'Calorimeter',
      desc: 'It is possible to test the indoor cooling, heating capacity and energy efficiency of the air conditioners according to ISO or other standards. It remotely sets the indoor / outdoor temperature and humidity conditions according to the test standards, determines the stability of the set temperature and humidity, and automatically calculates the data.'
    },
    {
      image: require('assets/images/performance-refrigerator.png'),
      title: 'Refrigerator capacity tester',
      desc: 'It is possible to test the indoor cooling, heating capacity and energy efficiency of the air conditioners according to ISO or other standards. It remotely sets the indoor / outdoor temperature and humidity conditions according to the test standards, determines the stability of the set temperature and humidity, and automatically calculates the data.'
    },
    {
      image: require('assets/images/performance-airflow.png'),
      title: 'Airflow measurement tester',
      desc: 'The Airflow measurement tester is a device that measures the wind speed according to the wind volume range and the nozzle based on each test specification. In addition, you can control the setting inlet wind speed/wind volume through the simulator function on the program.\n' +
        '\n' +
        '- Real-time verification of measurement data with dedicated software\n' +
        '- Measurement of data through test air flow, nozzle setup, and sensor connection\n' +
        '- Measurement type: Air volume, wind speed\n' +
        '- Forced blast control: air volume, wind speed\n' +
        '- Air volume range and usage nozzle settings\n' +
        '- Output Results Data Graphs\n' +
        '- Conversion of result data to Excel\n' +
        '- Sample Fan Power Consumption Measurement'
    },
    {
      image: require('assets/images/performance-washer.png'),
      title: 'Washing machine capacity tester',
      desc: 'The washing machine performance tester is a device that can check the overall performance of washing machine by measuring voltage, current, power, power factor, frequency, RPM, water temperature, flow rate, etc. and can check and analyze the test in real time by communicating with Hyuntech program.\n' +
        '- Real-time check of measurement data with dedicated software\n' +
        '- Data measurement through voltage and frequency adjustment and sensor connection for each test sample\n' +
        '- Connect single-phase 2-wire and 3-wire samples\n' +
        '- Output voltage and frequency adjustment\n' +
        '- Two simultaneous tests of washing machine and dryer\n' +
        '- Real-time analysis of measurement data\n' +
        '- Output the resulting data graph\n' +
        '- Raw data Excel conversion\n' +
        '- Output voltage adjustment',
    },
    {
      image: require('assets/images/performance-gas.png'),
      title: 'Gas oven capacity tester',
      desc: 'The washing machine performance tester is a device that can check the overall performance of washing machine by measuring voltage, current, power, power factor, frequency, RPM, water temperature, flow rate, etc. and can check and analyze the test in real time by communicating with Hyuntech program.\n' +
        '- Real-time check of measurement data with dedicated software\n' +
        '- Data measurement through voltage and frequency adjustment and sensor connection for each test sample\n' +
        '- Connect single-phase 2-wire and 3-wire samples\n' +
        '- Output voltage and frequency adjustment\n' +
        '- Two simultaneous tests of washing machine and dryer\n' +
        '- Real-time analysis of measurement data\n' +
        '- Output the resulting data graph\n' +
        '- Raw data Excel conversion\n' +
        '- Output voltage adjustment',
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
            <div className="top-title">{item.title}</div>
            {/* 제품 설명 */}
            <div className="dec">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;