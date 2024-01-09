import React from 'react';
import { NavLink } from 'react-router-dom';
import FeatureArea from './FeatureArea';
import i18n from 'Translation/i18n';
import { useTranslation } from 'react-i18next';

const BannerArea = () => {
  const { t } = useTranslation();
  return (
    <div className="hero-section">
      <img src={require('assets/images/main-banner.png')} alt="hero" className="banner-image" />

      <section className="banner-area banner-area-two bg-2">
        <div className="container">
          <div className={`banner-content`}>
            <span className="top-title">World class quality system</span>

            <h1 className={`banner-title m-center`}>
              {t(`banner.1`)}
            </h1>
            <p className="sub-dec">{t('banner.2')}</p>
            <NavLink to="/contact-us" className="default-btn contact-btn">
              <span>Contact Us</span>
            </NavLink>
          </div>
        </div>
      </section>

      <FeatureArea />
    </div>
  );
};

export default BannerArea;