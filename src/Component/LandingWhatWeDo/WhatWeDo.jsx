import React from 'react';
import "./WhatWeDo.css";
import LandingWrapper from '../LandingWrapper/LandingWrapper';
import time from "../../images/what-to-do-twenty-four 1.svg"
import battery from "../../images/what-battery.svg";
import test from "../../images/what-test.svg";



const WhatWeDo = () => {
  return (
    <div className='WhatWeDo-otr'>
      <LandingWrapper
      heading="GP- Line"
      bt="What We Do"
      detailclass ="wrapper-detail"
      detail="We are committed to providing the highest quality medical care.
        Our team of experienced professionals is dedicated to your health and well-being."
      />
      <div className="container-fluid">
        <div className="row-custom">
          <div className="whatToDo-box-otr">
            <div className="whatToDo-box-inr">
              <div className="img-otr">
                <img src={time} alt="" />
              </div>
              <div className="whatTodo-detail">
                <p className="what-heading">Dental Care</p>
                <p className='what-detail'>Our experienced GPs can provide medical advice at the touch of a button individualized recovery plans.</p>
              </div>
            </div>
          </div>
          <div className="whatToDo-box-otr">
            <div className="whatToDo-box-inr">
              <div className="img-otr">
                <img src={battery} alt="" />
              </div>
              <div className="whatTodo-detail">
                <p className="what-heading">PRESCRIPTION</p>
                <p className='what-detail'>We work around the clock to ensure your medication will reach you on the same day.</p>
              </div>
            </div>
          </div>
          <div className="whatToDo-box-otr">
            <div className="whatToDo-box-inr">
              <div className="img-otr">
                <img src={test} alt="" />
              </div>
              <div className="whatTodo-detail">
                <p className="what-heading">BLOOD TESTS</p>
                <p className='what-detail'>No need to queue for hours at the hospital to be seen, we send you a self testing kit which you simply post back.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
