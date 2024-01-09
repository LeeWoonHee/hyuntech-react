import React from 'react';

const TeamArea = () => {
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
                  src={require('assets/images/calorimeterImage.png')} // 이미지 경로 수정 필요
                  alt=""
                />
              </div>
              <div className="team-content pt-100 bg-black">
                <h3>Calorimeter</h3>
                <span className="text-xs dec">Thermodynamic property measurement tester of products</span>
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
                <h3>Refrigerator performance system</h3>
                <span className="text-xs dec">Product power consumption and temperature characteristic measurement tester</span>
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
                <h3>Airflow measurement tester</h3>
                <span className="text-xs dec">Product air volume/wind speed measurement tester</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamArea;