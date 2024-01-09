import { durabilityFooterClickIndex, performanceFooterClickIndex } from 'pages/recoil/recoilState';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const TheFooter = () => {
  const {t} = useTranslation();
  const navigation = useNavigate();

  const performances = [
    { name: 'footer.2' },
    { name: 'footer.3' },
    { name: 'footer.4' },
    { name: 'footer.5' },
    { name: 'footer.6' }
  ];

  const durabilities = [
    { name: 'footer.8' },
    { name: 'footer.9' },
    { name: 'footer.10' },
    { name: 'footer.11' },
    { name: 'footer.12' },
    { name: 'footer.13' },
    { name: 'footer.14' },
    { name: 'footer.15' },
    { name: 'footer.16' },
    { name: 'footer.17' }
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
              <h3>{t('footer.1')}</h3>
              <ul className="import-link">
                {performances.map((item, index) => (
                  <li key={index} onClick={() => goToPerformance(index)}>
                    {t(`${item.name}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-box">
            <div className="single-footer-widget">
              <h3>{t('footer.7')}</h3>
              <ul className="import-link">
                {durabilities.map((item, index) => (
                  <li key={index} onClick={() => goToDurability(index)}>
                    {t(`${item.name}`)}
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
                  <span>{t('footer.18')}</span>
                </li>
                <li>
                  <p>{t('footer.19')}</p>
                  <p>{t('footer.20')}</p>
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