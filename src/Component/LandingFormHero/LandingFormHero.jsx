import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import "./LandingFormHero.css";
import downArrow from "../../images/down-arrowForm.svg";
// import time from "../../images/form-time.svg";
// import location from "../../images/formLocation.svg";
// import person from "../../images/formProson.svg";
// import phone from "../../images/formCall.svg";
// import massage from "../../images/formMassage.svg";
// import date from "../../images/fornDate.svg";




const LandingFormHero = () => {
  const [consultationType, setConsultationType] = useState(null);
  const [dob, setDob] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState(null);
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const options = [
    { value: 'general-appointment', label: 'General Appointment' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'follow-up', label: 'Follow-up' },
  ];
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form values to the console
    console.log({
      consultationType,
      dob,
      time,
      reason,
      fullName,
      phone,
      email,
      gender,
      date,
      address,
      nameOnCard,
      cardNumber,
      expiryDate,
    });
  };
  return (
    <div className='LandingFormHero-otr'>
      <div className="LandingFormHero-inr">
        <div className="row-Form">
          <div className="form-otr">
            <form className='form-inr' onSubmit={handleSubmit}>
              <div className="Information">
                <p className="heading">Consultation Information <span className="heading-span">*</span></p>
                <div className="information-up">
                  <div className="input">
                    <label htmlFor="consultation" className='lebal'>Consultation Type <span className='lebal-span'>*</span></label>
                    <div className='input-otr'>
                      <Select
                        id="consultation"
                        className='input-inr2'
                        defaultValue={consultationType}
                        onChange={setConsultationType}
                        options={options}
                        placeholder="General Appointment"
                        components={{
                          DropdownIndicator: () => <img src={downArrow} className='input-img' alt="dropdown arrow" />,
                          IndicatorSeparator: () => null
                        }}
                      />
                    </div>
                  </div>
                  <div className="input">
                    <label className='lebal'>Date of Birth <span className='lebal-span'>*</span></label>
                    <div className='input-otr'>
                      <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className='input-inr5'
                      />
                    </div>
                  </div>
                  <div className="input">
                    <label className='lebal'>Select Time <span className='lebal-span'>*</span></label>
                    <div className='input-otr'>
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className='input-inr5'
                      />
                    </div>
                  </div>
                </div>
                <div className="information-down">
                  <div className="input1">
                    <label className='lebal'>Reason for Booking <span className='lebal-span'>*</span></label>
                    <div className='input-otr1'>
                      <input
                        type="text"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className='input-inr1'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="Information p-up1">
                <p className="heading">Personal Information <span className="heading-span">*</span></p>
                <div className="information-up">
                  <div className="input">
                    <label className='lebal'>Full Name <span className='lebal-span'>*</span></label>
                    <div className='input-otr'>
                      <input
                        type="text"
                        placeholder='Enter Name'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className='input-inr'
                      />
                    </div>
                  </div>
                  <div className="input">
                    <label className='lebal'>Phone Number <span className='lebal-span'>*</span></label>
                    <div className='input-otr'>
                      <input
                        type="text"
                        placeholder='Enter Phone Number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className='input-inr'
                      />
                    </div>
                  </div>
                  <div className="input">
                    <label className='lebal'>Email Address <span className='lebal-span'>*</span></label>
                    <div className='input-otr'>
                      <input
                        type="text"
                        placeholder='Enter Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='input-inr'
                      />
                    </div>
                  </div>
                  <div className="input">
                    <label htmlFor="gender" className='lebal'>Gender <span className='lebal-span'>*</span></label>
                    <div className='input-otr2'>
                      <Select
                        id="gender"
                        className='input-inr2'
                        defaultValue={gender}
                        onChange={setGender}
                        options={genderOptions}
                        placeholder="Select Gender"
                        components={{
                          DropdownIndicator: () => null,
                          IndicatorSeparator: () => null
                        }}
                      />
                    </div>
                  </div>
                  <div className="input">
                    <label className='lebal'>Date <span className='lebal-span'>*</span></label>
                    <div className='input-otr'>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className='input-inr5'
                      />
                    </div>
                  </div>
                </div>
                <div className="information-down">
                  <div className="input1">
                    <label className='lebal'>Address <span className='lebal-span'>*</span></label>
                    <div className='input-otr1'>
                      <input
                        type="text"
                        placeholder='Enter Your Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className='input-inr1'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="Information p-up">
                <p className="heading">Payment Details<span className="heading-span">*</span></p>
                <div className="information-up">
                  <div className="input">
                    <label className='lebal'>Name on Card<span className='lebal-span'>*</span></label>
                    <div className='input-otr'>
                      <input
                        type="text"
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                        className='input-inr'
                      />
                    </div>
                  </div>
                  <div className="input">
                    <label className='lebal'>Card Number <span className='lebal-span'>*</span></label>
                    <div className='input-otr'>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className='input-inr'
                      />
                    </div>
                  </div>
                  <div className="input">
                    <label className='lebal'>Expiry Date <span className='lebal-span'>*</span></label>
                    <div className='input-otr'>
                      <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        className='input-inr'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-btn-otr">
                <button className='form-btn-inr' type="submit">Book an Appointment</button>
              </div>
            </form>
          </div>
          <div className="form-detail-otr">
            <div className="form-detail-inr">
              <p className="heading-hero">GP- Line</p>
              <p className="hero-para">Empowering Recovery on Your
                Journey to Recovery</p>
              <p className="hero-detail">Schedule your doctor appointment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingFormHero
