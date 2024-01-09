import TheFooter from 'components/TheFooter';
import Home from 'pages/main/Home';
import Performance from 'pages/perpormance/index';
import Durability from 'pages/durability/index';
import Contact from 'pages/contact/Contact';
import React, { useRef, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

const Router = () => {
  const containerRef = useRef(null);
  useEffect(() => {

  }, [])
  return (
    <LocomotiveScrollProvider
      options={{ smooth: true }}
      containerRef={containerRef}
    >
      <div className='main' data-scroll-container ref={containerRef}>;
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/performances' element={<Performance />} />
          <Route path='/durabilities' element={<Durability />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>
        <TheFooter />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Router;