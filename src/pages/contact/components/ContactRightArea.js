import React from 'react';
import emailIcon from 'assets/images/icon/email-icon.svg';
import phoneIcon from 'assets/images/icon/phone-icon.svg';
import printerIcon from 'assets/images/icon/printer-icon.svg';
import locationIcon from 'assets/images/icon/location-icon.svg';
import { useTranslation } from 'react-i18next';

const ContactRightArea = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-right-area">
      <div className="contact-info">
        <div className="contact-top">
          <p className="title">{t('contact.1')}</p>
          <p className="sub-title">{t('contact.2')}</p>
        </div>

        <ul className="address">
          <li className="address-item">
            <img
              src={locationIcon}
              alt=""
            />
            <span className="address-item-title">ADDRESS</span>
            <span>{t('contact.3')}</span>
          </li>
          <li className="address-item">
            <img
              src={phoneIcon}
              alt=""
            />
            <span className="address-item-title">PHONE</span>
            <span>{t('contact.4')}</span>
          </li>
          <li className="address-item">
            <img
              src={printerIcon}
              alt=""
            />
            <span className="address-item-title">FAX</span>
            <span>{t('contact.5')}</span>
          </li>
          <li className="address-item">
            <img
              src={emailIcon}
              alt=""
            />
            <span className="address-item-title">Email</span>
            <span>hyuntech08@nate.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactRightArea;