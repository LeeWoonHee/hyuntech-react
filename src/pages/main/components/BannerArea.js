import React from 'react';
import { NavLink } from 'react-router-dom';
import FeatureArea from './FeatureArea';

const BannerArea = () => {
  return (
<div className="hero-section">
      <img src={require('assets/images/main-banner.png')} alt="hero" className="banner-image" />

      <section className="banner-area banner-area-two bg-2">
        <div className="container">
          <div className={`banner-content`}>
            <span className="top-title">World class quality system</span>

            <h1 className={`banner-title m-center`}>
              We will become a trustworthy company with reliable products.
            </h1>
            <p className="sub-dec">Hyuntech Co., Ltd is doing its best to give greater satisfaction to all stakeholders through ethical / transparent management.</p>
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