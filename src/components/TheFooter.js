import { durabilityFooterClickIndex, performanceFooterClickIndex } from 'pages/recoil/recoilState';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const TheFooter = () => {
  const navigation = useNavigate();

  const performances = [
    { name: 'Calorimeter' },
    { name: 'Refrigerator capacity tester' },
    { name: 'Airflow measurement tester' },
    { name: 'Washing machine capacity tester' },
    { name: 'Gas oven capacity tester' }
  ];

  const durabilities = [
    { name: 'Temperature & humidity chamber' },
    { name: 'Water bath' },
    { name: 'Salt water spray tester' },
    { name: 'Battery charge/discharge system' },
    { name: 'Vacuum cleaner DC life tester' },
    { name: 'Automatic door open/close robot' },
    { name: 'DC On/Off Controller' },
    { name: 'Vibration tester' },
    { name: '8m drop impact tester' },
    { name: 'Dust test chamber' }
  ];

  const goToPerformance = (index) => {
    navigation(`/performances`, {state: index})
  };

  const goToDurability = (index) => {
    navigation(`/durabilities`, {state : index})
    
  };


  return (
    <footer className="footer-area white-bg bg-f3">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-box">
            <div className="single-footer-widget">
              <a href="/" className="logo">
                <img src={require('assets/images/logo/footer-logo.png')} alt="Image" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-box">
            <div className="single-footer-widget">
              <h3>Capacity Tester</h3>
              <ul className="import-link">
                {performances.map((item, index) => (
                  <li key={index} onClick={() => goToPerformance(index)}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-box">
            <div className="single-footer-widget">
              <h3>Durability Tester</h3>
              <ul className="import-link">
                {durabilities.map((item, index) => (
                  <li key={index} onClick={() => goToDurability(index)}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-box">
            <div className="single-footer-widget">
              <h3>Contact Us</h3>
              <ul className="address">
                <li>
                  <span>
                    101-1405, #88, Digital empire 2<br/>
                    Sinwon-ro, Yeongtong-gu<br/>
                    Suwon-si,Gyeonggi-do, Korea 16681<br/>
                  </span>
                </li>
                <li>
                  <p>+82-31-695-6285</p>
                  <p>+82-31-695-6287</p>
                  <p>E-Mail: hyuntech08@nate.com </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          COPYRIGHT (C) 2013 HYUNTECH.CO. LTD. ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;