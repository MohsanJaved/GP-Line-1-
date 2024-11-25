import React from 'react';
import "./LandingAward.css";
import { Link } from 'react-router-dom';
import call from "../../images/land-call-icon.svg"

const LandingAward = () => {
    return (
        <div className='LandingAward-otr'>
            <div className="LandingAward-inr">
                <div className="upperAward-otr">
                    <div className="upperAward-inr">
                        <p className="upperaward-heading">Need A Check-Up? Call Us For An Appointment Today!</p>
                        <div className="award-btn-otr">
                            <Link to="" className="award-btn-inr"><img src={call} className='call-icon' alt="img" />+44 203 371 0995</Link>
                        </div>
                    </div>
                </div>
                <div className='bottomAward-otr'>
                    <div className="bottomAward-inr">
                        <p className="award-heading">We are Finalist Health Investor <span className='award-heading-span'>Award 2022</span> </p>
                        <p className="award-detail">08 June Grosvenor House Hotel</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default LandingAward
