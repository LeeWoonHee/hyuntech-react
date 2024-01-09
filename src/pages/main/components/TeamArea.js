import React from 'react';
import { useTranslation } from 'react-i18next';

const TeamArea = () => {
  const {t} = useTranslation();
  return (
    <section className="team-area team-section bg-gray pt-100">
      <div className="container">
        <div className="section-title blex">
          <span className="blex w-full">World class quality system</span>
          <h2>Main product</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-6 single-team-box">
            <div className="single-team blex">
              <div className="product-image blex bg-white">
                <img
                  src={require('assets/images/calorimeterImage.png')} 
                  alt=""
                />
              </div>
              <div className="team-content pt-100 bg-black">
                <h3>{t('team.1')}</h3>
                <span className="text-xs dec">{t('team.2')}</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 single-team-box">
            <div className='single-team blex'>
              <div className="product-image blex bg-white">
                <img
                  src={require('assets/images/refrigeratorImage.png')} // 이미지 경로 수정 필요
                  alt=""
                />
              </div>

              <div className="team-content bg-black">
                <h3>{t('team.3')}</h3>
                <span className="text-xs dec">{t('team.4')}</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 single-team-box">
            <div className="single-team blex">
              <div className="product-image blex bg-white">
                <img
                  src={require('assets/images/airflowImage.png')}
                  alt=""
                />
              </div>

              <div className="team-content bg-black">
                <h3>{t('team.5')}</h3>
                <span className="text-xs dec">{t('team.6')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamArea;