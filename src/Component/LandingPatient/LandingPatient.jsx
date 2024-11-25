import React from 'react';
import "./LandingPatient.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import star from "../../images/landstars.svg";
import patientImg from "../../images/land-patientImg.svg";
import patientImg3 from "../../images/patientImg3.svg";
import patientImg2 from "../../images/patientImg2.svg";



const LandingPatient = () => {
    return (
        <div className='LandingPatient'>
            <div className="wrapper-patient">
                <p className="patient-heading">What our patients say</p>
                <p className="patient-para">More than 250 five-star reviews on Google</p>
            </div>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints= {
                    {
                        0: {
                          slidesPerView: 1,
                        },
                        575: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        992: {
                          slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                          }
                      }
                    }
                modules={[Pagination]}

                className="mySwiper"
            >
                <SwiperSlide className='SwiperSlide'>
                    <div className="patient-otr">
                        <div className="patient inr">
                            <img src={star} alt="" />
                            <p className="patient-detail">This is a wonderful dental office with very
                                professional and friendly staff and up to date
                                technology. They took me at a very short notice
                                when I needed emergency dental work, they were
                                so nice and accommodating.</p>
                            <img src={patientImg3} alt="" />
                            <p className="patient-head">David, Spinal Cord Injury</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <div className="patient-otr">
                        <div className="patient inr">
                            <img src={star} alt="" />
                            <p className="patient-detail">The best dental care I have ever experienced!
                                Professional and friendly staff made me feel like
                                family… would highly recommend to anyone!!!</p>
                            <img src={patientImg} alt="" />
                            <p className="patient-head">Cynthia, Stroke Rehabilitation</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <div className="patient-otr">
                        <div className="patient inr">
                            <img src={star} alt="" />
                            <p className="patient-detail">Rehabilitation was harder than I expected, but I’m
                                grateful to resume my active lifestyle once again. I
                                would not have made it, if it weren’t for my rehab
                                team.</p>
                            <img src={patientImg2} alt="" />
                            <p className="patient-head">Cynthia, Stroke Rehabilitation</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <div className="patient-otr">
                        <div className="patient inr">
                            <img src={star} alt="" />
                            <p className="patient-detail">The best dental care I have ever experienced!
                                Professional and friendly staff made me feel like
                                family… would highly recommend to anyone!!!</p>
                            <img src={patientImg} alt="" />
                            <p className="patient-head">Cynthia, Stroke Rehabilitation</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='SwiperSlide'>
                    <div className="patient-otr">
                        <div className="patient inr">
                            <img src={star} alt="" />
                            <p className="patient-detail">The best dental care I have ever experienced!
                                Professional and friendly staff made me feel like
                                family… would highly recommend to anyone!!!</p>
                            <img src={patientImg} alt="" />
                            <p className="patient-head">Cynthia, Stroke Rehabilitation</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default LandingPatient
