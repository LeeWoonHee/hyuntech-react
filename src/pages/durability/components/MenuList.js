import LocomotiveScroll from 'locomotive-scroll';
import { durabilityClickIndex } from 'pages/recoil/recoilState';
import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';

const MenuList = () => {
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
      title: 'Temperature & humidity chamber',
      desc : 'The temperature and humidity chamber is capable of carrying out the test under the required conditions by supplying a specific temperature/humidity. It is required for testing the durability and reliability of the specimen, predicting the durability of the instrument by testing the specimen with excessive climatic conditions beyond the required conditions.'
    },
    {
      image: require('assets/images/durability-waterbath.png'),
      title: 'Water bath',
      desc : 'The water bath is a facility that supplies water at the temperature desired by the user, and uses a refrigerator and heater to maintain and supply water at a set temperature.\n' +
      '- Refrigerator, heater automatic control / manual control function\n' +
      '- Check water temperature by measuring inlet and outlet temperature\n' +
      '- Temperature Auto-tuning function\n' +
      '- Precise temperature control via PID controller\n' +
      '- Display set temperature and actual temperature\n' +
      '- SUS integrated material that is resistant',
    },
    {
      image: require('assets/images/durability-saltwater.png'),
      title: 'Salt water spray tester',
      desc : 'It is a tester that sprays a certain concentration of salt water into the sample to conduct a standard test.\n' +
      '- Conduct a test with simple spray/continuous spray\n' +
      '-The temperature of the saline. Set Spray Time, Rest Tim',
    },
    {
      image: require('assets/images/durability-battery.png'),
      title: 'Battery charge/discharge tester',
      desc : 'The Battery charge/discharge tester connects power and load to the battery to repeat charging and discharging. Through Repeating tests, It can verify durability and capacity of the battery.',
    },
    {
      image: require('assets/images/durability-cleaner.png'),
      title: 'Vacuum cleaner DC life tester',
      desc : 'It is a tester that measures the life of the vacuum cleaner and battery. It is suitable for the life test pf cleaner because the voltage and number of tests can be set for each sample and conditions of a test can be changed during the test.\n' +
      '- Real-time verification of measurement data with dedicated software\n' +
      '- Set the voltage for each test sample, the number of tests, and proceed with individual tests.\n' +
      '- Cleaner sample connection (sample count can be adjusted)\n' +
      '- Output voltage and test time adjustment\n' +
      '- Test settings for each sample and change settings during the test\n' +
      '- Output Results Data Graphs\n' +
      '- Raw Data Excel Conversion\n' +
      '- Output voltage / On ∙ Off time adjustment',
    },
    {
      image: require('assets/images/durability-door.png'),
      title: 'Automatic door open/close robot',
      desc : 'The automatic door open/close robot automatically operate the door opening and closing of the sample desired by the user. It can conduct tests under the same conditions.\n' +
      '- Door opening/closing function by set time/number\n' +
      '- Set the handle to fit the position of each door\n' +
      '- measuring distance between Door opening and closing handle and doors',
    },
    {
      image: require('assets/images/durability-controller.png'),
      title: 'DC On/Off Controller',
      desc : 'The DC On/Off Controller is a facility that tests by controlling the current according to the on/off time set by the user.\n' +
      '- Display the number of on/off tests\n' +
      '- Control DC output on/off according to set time\n' +
      '- DC Power On/OFF time 설정\n' +
      '- On/Off Test Count Counter Output\n' +
      '- Control DC current with CW/CCW function',
    },
    {
      image: require('assets/images/durability-vibration.png'),
      title: 'Vibration tester',
      desc : 'Vibration tester is a equipment can reproduces the distribution environment. You can check the change of the sample by repeating up-down/left-right vibration in the frequency range specified by the user.',
    },
    {
      image: require('assets/images/durability-8m.png'),
      title: '8m drop impact tester',
      desc : 'It is a tester can measure the durability of a sample against an external impact, repeating the drop impact test at the set height to reproduce the external impact.',
    },
    {
      image: require('assets/images/durability-dust.png'),
      title: 'Dust test chamber',
      desc : 'It is a tester that checks the change of sample by injecting dust in a closed space and can reproduce the change according to the durability and actual environment of the sample.'
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
          <div className="top-title">{item.title}</div>
          {/* 제품 설명 */}
          <div className="dec">{item.desc}</div>
        </div>
      </div>
    ))}
    {/* <ScrollTopButton /> */}
  </div>
  );
};

export default MenuList;