import React, { useEffect, useRef } from 'react';
import ContactLeftArea from './components/ContactLeftArea';
import ContactRightArea from './components/ContactRightArea';
import LocomotiveScroll from 'locomotive-scroll';

const Contact = () => {
  const scroll = useRef(null);
  
  useEffect(() => {
    scroll.current = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true,
    });
    return () => {
      scroll.current.destroy();
    }
  }, []);
  return (
    <section className="contact ptb-100">
      <div className="container">
        <div className="main-title">
          Contact US
        </div>

        <div className="main-contact-area">
          <ContactLeftArea />
          <ContactRightArea />
        </div>
      </div>
    </section>
  );
};

export default Contact;