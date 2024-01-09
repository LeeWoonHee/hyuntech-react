import { durabilityClickIndex } from 'pages/recoil/recoilState';
import React, { useState,useEffect,useRef } from 'react';
import { useRecoilState } from 'recoil';
import LocomotiveScroll from 'locomotive-scroll';

const LeftMenuBar = () => {
  const [clickIndex, setClickIndex] = useRecoilState(durabilityClickIndex);
  const [active, setActive] = useState(0);
  const lists = [
    { durabilityTester: 'Temperature & humidity chamber' },
    { durabilityTester: 'Water bath' },
    { durabilityTester: 'Salt water spray tester' },
    { durabilityTester: 'Battery charge/discharge tester' },
    { durabilityTester: 'Vacuum cleaner DC life tester' },
    { durabilityTester: 'Automatic door open/close robot'},
    { durabilityTester: 'DC On/Off Controller'},
    { durabilityTester: 'Vibration tester'},
    { durabilityTester: '8m drop impact tester'},
    { durabilityTester: 'Dust test chamber'}
  ];
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
  const clickItem = (index) => {
    setActive(index);
    setClickIndex(index);
  };
  return (
    <div className="left-menu-bar" data-scroll data-scroll-sticky data-scroll-target=".main">
      {/* 1024 이상 웹 화면에서 보여지는 sticky 기준 */}
      {window.innerWidth > 1024 && (
        <div className="left-menu" >
          <h3>Durability Tester</h3>
          <div className="left-menu-item">
            <ul className='menu'>
              {lists.map((list, index) => (
                <li
                  key={index}
                  onClick={() => clickItem(index)}
                  className={`list py-3 ${active === index ? 'active' : ''}`}
                >
                  {list.durabilityTester}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 1024 이하 모바일 화면에서 보여지는 sticky 기준 */}
      {window.innerWidth < 1024 && (
        <div className="left-menu" data-scroll data-scroll-sticky data-scroll-target=".performance-area">
          <h3>Capacity tester</h3>
          <div className="left-menu-item">
            <ul className='menu'>
              {lists.map((list, index) => (
                <li
                  key={index}
                  onClick={() => clickItem(index)}
                  className={`list border-bottom-0 ${active === index ? 'active' : ''}`}
                >
                  {list.durabilityTester}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftMenuBar;