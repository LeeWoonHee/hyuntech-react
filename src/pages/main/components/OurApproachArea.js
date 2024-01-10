import React from 'react';
//svg import
import checkIcon from 'assets/images/icon/checkIcon.svg';
import { useTranslation } from 'react-i18next';

const OurApproachArea = () => {
  const { t } = useTranslation();
  return (
    <section className="our-approach-area approach">
      <div className="container">

        <div className="section-title">
          <span>World class quality system</span>
          <p className="approach-main-title">{t('approach.1')}</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 approach-image">
            <div className="approach-img">
              <img
                src={require('assets/images/approach-image.png')}
                alt=""
                className="w-full"
              />
            </div>
          </div>

          <div className="col-lg-6 approach-right">
            <div className="approach-content">
              <h3 className="approach-content-title">{t('approach.2')}</h3>

              <div className="row">
                <div className="col-lg-6 col-sm-6 approach-box">
                  <div className="single-approach flex ">
                    <img
                      src={checkIcon}
                      alt=""
                    />
                    <h3 className="mb-0">{t('approach.3')}</h3>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 approach-box">
                  <div className="single-approach flex">
                    <img
                      src={checkIcon}
                      alt=""
                    />
                    <h3 className="mb-0">{t('approach.4')}</h3>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 approach-box">
                  <div className="single-approach flex">
                    <img
                      src={checkIcon}
                      alt=""
                    />
                    <h3 className="mb-0">{t('approach.5')}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachArea;