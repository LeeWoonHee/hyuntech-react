import React from 'react';
//svg import
import checkIcon from 'assets/images/icon/checkIcon.svg';

const OurApproachArea = () => {
  return (
    <section className="our-approach-area approach">
    <div className="container">

      {/* 상단 타이틀 */}
      <div className="section-title">
        <span>World class quality system</span>
        <p className="approach-main-title">We offer a variety of testing system to suit your needs</p>
      </div>

      {/* 왼쪽 이미지 */}
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

        {/* 오른쪽 상단 타이틀 */}
        <div className="col-lg-6 approach-right">
          <div className="approach-content">
            <h3 className="approach-content-title">Hyuntech is a company that mainly manufactures test equipment that satisfies the needs of users. From communication between equipment and users to remote monitoring from outside, usability in various environments is a strength.</h3>

            {/* 오른쪽 하단 박스 */}
            <div className="row">
              <div className="col-lg-6 col-sm-6 approach-box">
                <div className="single-approach flex ">
                  <img
                    src={checkIcon}
                    alt=""
                  />
                  <h3 className="mb-0">Optimized specification</h3>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6 approach-box">
                <div className="single-approach flex">
                  <img
                    src={checkIcon} 
                    alt=""
                  />
                  <h3 className="mb-0">Easy / convenient use</h3>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6 approach-box">
                <div className="single-approach flex">
                  <img
                    src={checkIcon} 
                    alt=""
                  />
                  <h3 className="mb-0">Excellent performance / durability</h3>
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