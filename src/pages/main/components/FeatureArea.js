import React from 'react';
// svg import 
import listIcon from 'assets/images/icon/listIcon.svg';
import fileListIcon from 'assets/images/icon/fileListIcon.svg';
import upGraphIcon from 'assets/images/icon/upGraphIcon.svg';

const FeatureArea = () => {
  return (
    <section className="feature-area feature-area-two main-feature">
      <div className="container">
        <div className="row feature-row">

          {/* 시스템 특징 박스 */}
          <div className="col-lg-4 col-sm-6 feature-box">
            <div className="single-feature bg-white">
              <div>
                <div className="title">
                  <div>
                    <img
                      src={listIcon}
                      alt="List Icon"
                      className="icon"
                    />
                  </div>
                  <h3 className="pt-0 blex feature-top-title">Features</h3>
                </div>
                <p className="sub-title text-sm">We build a system that fits your needs.</p>
              </div>
            </div>
          </div>

          {/* 주요 개발 시스템 박스 */}
          <div className="col-lg-4 col-sm-6 feature-box">
            <div className="single-feature bg-white">
              <div>
                <div className="title">
                  <div>
                    <img
                      src={upGraphIcon}
                      alt="Up Graph Icon"
                      className="icon"
                    />
                  </div>
                  <h3 className="pt-0 blex feature-top-title">Development points</h3>
                </div>
                <p className="sub-title text-sm">Hyuntech manufactures performance tester and durability tester.</p>
              </div>
            </div>
          </div>

          {/* 시스템 제품 박스 */}
          <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 feature-box">
            <div className="single-feature bg-white">
              <div>
                <div className="title">
                  <div>
                    <img
                      src={fileListIcon}
                      alt="File List Icon"
                      className="icon"
                    />
                  </div>
                  <h3 className="pt-0 blex feature-top-title">Featured products</h3>
                </div>
                <p className="sub-title text-sm">Additional features and conveniences are reflected at the user’s request.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureArea;