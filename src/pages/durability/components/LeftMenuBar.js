import { durabilityClickIndex } from 'pages/recoil/recoilState';
import React, { useState,useEffect,useRef } from 'react';
import { useRecoilState } from 'recoil';
import LocomotiveScroll from 'locomotive-scroll';
import { useTranslation } from 'react-i18next';

const LeftMenuBar = () => {
  const {t} = useTranslation();
  const [clickIndex, setClickIndex] = useRecoilState(durabilityClickIndex);
  const [active, setActive] = useState(0);
  const lists = [
    { durabilityTester: 'durabilityTester.title.1' },
    { durabilityTester: 'durabilityTester.title.2' },
    { durabilityTester: 'durabilityTester.title.3' },
    { durabilityTester: 'durabilityTester.title.4' },
    { durabilityTester: 'durabilityTester.title.5' },
    { durabilityTester: 'durabilityTester.title.6'},
    { durabilityTester: 'durabilityTester.title.7'},
    { durabilityTester: 'durabilityTester.title.8'},
    { durabilityTester: 'durabilityTester.title.9'},
    { durabilityTester: 'durabilityTester.title.10'}
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
                  {t(`${list.durabilityTester}`)}
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