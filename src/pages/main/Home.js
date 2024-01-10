import React, { useEffect, useRef } from 'react';
import BannerArea from './components/BannerArea';
import MobileFeatureArea from './components/MobileFeatureArea';
import OurApproachArea from './components/OurApproachArea';
import TeamArea from './components/TeamArea';
import LocomotiveScroll from 'locomotive-scroll';


const Home = () => {
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
    <div className="home">
      <BannerArea />
      <MobileFeatureArea />
      <OurApproachArea />
      <TeamArea />
    </div>
  );
};

export default Home;