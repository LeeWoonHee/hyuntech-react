import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import i18n from 'i18next';

const TheNav = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const handleLangChange = (lang) => {
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header-area" data-scroll data-scroll-sticky data-scroll-target=".main">
      {/* Start Nav Area */}
      <div className="navbar-area navbar-area-two">
        <div className="mobile-nav">
          <div className="container">
            <NavLink to="/" className="logo">
              <img src={require('assets/images/logo/hyuntech-logo.png')} alt='logo' />
            </NavLink>
          </div>
        </div>

        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md">
              <NavLink to="/" className="navbar-brand">
                <img src={require('assets/images/logo/hyuntech-logo.png')} alt='logo' />
              </NavLink>
              {/* Desktop Navbar Categories */}
              <div className="navbar-collapse mean-menu">
                <ul className="navbar-nav m-auto mobile-menu">
                  <li className="nav-item">
                    <NavLink
                      to="/performances"
                      className="nav-link"
                    >
                      {t('nav.1')}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/durabilities"
                      className="nav-link"
                    >
                      {t('nav.2')}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/contact-us"
                      className="nav-link"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>

                <div className="translation-option blex">
                  <div
                    className={`ko translation-btn ${currentLang === 'ko' ? 'active' : ''}`}
                    onClick={() => handleLangChange('ko')}
                  >
                    {t('KO')}
                  </div>
                  <div className="middle-line"></div>
                  <div
                    className={`en translation-btn ${currentLang === 'en' ? 'active' : ''}`}
                    onClick={() => handleLangChange('en')}
                  >
                    {t('EN')}
                  </div>
                </div>

                <div>
                  <button
                    className="menu-btn"
                    onClick={openMenu}
                    style={{ display: window.innerWidth < 1024 ? 'block' : 'none' }}
                  >
                    <img
                      src={isOpenMenu ? require('assets/images/icon/menu-close-btn.svg') : require('assets/images/icon/menu-btn.svg')}
                      alt="menu icon"
                    />
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="menu-bg" style={{ display: isOpenMenu ? 'block' : 'none' }}></div>
    </header>
  );
};

export default TheNav;
