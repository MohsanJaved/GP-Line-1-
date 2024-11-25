import React from 'react';
import "./LandingchooseUs.css";
import correct from "../../images/landcorrect.svg";
import imgchoose from "../../images/landchoose.svg";


const LandingchooseUs = () => {
    return (
        <div className='LandingchooseUs'>
            <div className="container-choose">
                <div className="choose-row">
                    <div className="chosse-detail-otr">
                        <div className="chosse-detail-inr">
                            <div className='LandingWrapper2'>
                                <p className="wrapperheading2">GP- Line</p>
                                <div className="wrapper-bt-otr2">
                                    <p className="wrapper-bt2">
                                    Why Choose Us

                                    </p>
                                </div>
                                <div className="wrapper-detail-otr2">
                                    <p className="wrapper-detail2">We offer a wide range of medical services, from preventive care and routine check-ups to specialized treatments and surgeries.
                                    </p>
                                </div>
                            </div>
                            <ul className="ul-choose">
                                <li className="li-choose">
                                    <p className="para-choose"><img src={correct} className='tick1' alt="" />On demand service (9am - 9pm)</p>
                                </li>
                                <li className="li-choose">
                                    <p className="para-choose"><img src={correct} className='tick1' alt="" />Regulated by Care Quality Commission (CQC )</p>
                                </li>
                                <li className="li-choose">
                                    <p className="para-choose"><img src={correct} className='tick1' alt="" />GMC Registered GP's</p>
                                </li>
                                <li className="li-choose">
                                    <p className="para-choose"><img src={correct} className='tick1' alt="" />All condition type treatments</p>
                                </li>
                                <li className="li-choose">
                                    <p className="para-choose"><img src={correct} className='tick1' alt="" />Same day fit to fly certificates, sick notes, referral letters and prescriptions</p>
                                </li>
                                <li className="li-choose">
                                    <p className="para-choose"><img src={correct} className='tick1' alt="" />Hassle free, private and confidential</p>
                                </li>
                                <li className="li-choose">
                                    <p className="para-choose"><img src={correct} className='tick1' alt="" />Be seen within an hour</p>
                                </li>
                                <li className="li-choose">
                                    <p className="para-choose"><img src={correct} className='tick1' alt="" />More convenient, efficient and flexible service</p>
                                </li>
                                <li className="li-choose">
                                    <p className="para-choose"><img src={correct} className='tick1' alt="" />Excellent clients satisfaction (Trust pilot & Google reviews).</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="choose-img-otr">
                        <img src={imgchoose} className="choose-img-inr" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingchooseUs
