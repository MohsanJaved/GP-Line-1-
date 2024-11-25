import React from 'react';
import "./LandingPageFooter.css";
import { Link } from 'react-router-dom';
import footerlogo from "../../images/logo-footer.svg";
import facebooklogo from "../../images/facebook-logo-footer.svg";
import whatsapplogo from "../../images/whatsapp-logo-footer.svg";
import instagramlogo from "../../images/instagram-logo-footer.svg";


const LandingPageFooter = () => {
  return (
    <div className='LandingPageFooter-otr'>
      <div className="LandingPageFooter-inr">
        <div className="social-side">
          <div className="footer-img">
            <img src={footerlogo} alt="img" />
          </div>
          <div className="social-otr">
            <div className="social-inr">
              <ul className="ul-social">
                <li className="li-social">
                  <Link className="a-social">
                    <img src={whatsapplogo} alt="img" />
                  </Link>
                </li>
                <li className="li-social">
                  <Link className="a-social">
                    <img src={facebooklogo} alt="img" />
                  </Link>
                </li>
                <li className="li-social">

                  <Link className="a-social">
                    <img src={instagramlogo} alt="img" />
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div className="link-side">
          <div className="link-side-inr">
            <p className="heading-footer">Quick Links</p>
            <ul className="ul-footer">
              <li className="li-footer">
                <Link className="a-footer">Home</Link>
                <Link className="a-footer">About Me</Link>
                <Link className="a-footer">Portfolio</Link>
                <Link className="a-footer">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="social-inr social-padding">
            <p className="heading-footer">Legal</p>
            <ul className="ul-footer">
              <li className="li-footer">
                <Link className="a-footer">Return Policy</Link>
                <Link className="a-footer">Shipping Policy</Link>
                <Link className="a-footer">Privacy Policy</Link>
                <Link className="a-footer">Terms of Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='boarder'></div>
    </div>
  )
}

export default LandingPageFooter
