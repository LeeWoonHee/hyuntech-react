import React, { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { performanceClickIndex } from 'pages/recoil/recoilState'
import LocomotiveScroll from 'locomotive-scroll';
import { useTranslation } from 'react-i18next';
const LeftMenuBar = () => {
  const { t } = useTranslation();
  const [clickIndex, setClickIndex] = useRecoilState(performanceClickIndex);
  const [active, setActive] = useState(0);
  const scroll = useRef(null);

  const lists = [
    { capacityTester: 'capacityTester.title.1' },
    { capacityTester: 'capacityTester.title.2' },
    { capacityTester: 'capacityTester.title.3' },
    { capacityTester: 'capacityTester.title.4' },
    { capacityTester: 'capacityTester.title.5' }
  ];
  useEffect(() => {
    scroll.current = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true,
    });
    return () => {
      scroll.current.destroy();
    }
  }, []);
  const clickItem = (index) => {
    setActive(index);
    setClickIndex(index);
  };
  return (
    <div className="left-menu-bar" data-scroll data-scroll-sticky data-scroll-target=".main">
      {/* 1024 이상 웹 화면 */}
      {window.innerWidth > 1024 && (
        <div className="left-menu"  >
          <h3>{t('nav.1')}</h3>
          <div className="left-menu-item">
            <ul className='menu'>
              {lists.map((list, index) => (
                <li
                  key={index}
                  onClick={() => clickItem(index)}
                  className={`list py-3 ${active === index ? 'active' : ''}`}
                >
                  {t(`${list.capacityTester}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 1024 이하 모바일 화면 */}
      {window.innerWidth < 1024 && (
        <div className="left-menu">
          <h3>Capacity Tester</h3>
          <div className="left-menu-item">
            <ul className='menu'>
              {lists.map((list, index) => (
                <li
                  key={index}
                  onClick={() => clickItem(index)}
                  className={`list border-bottom-0 ${active === index ? 'active' : ''}`}
                >
                  {list.capacityTester}
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