import React from 'react';
import LandingPageNavBar from '../../Component/LandingPageNavBar/LandingPageNavBar';
import LandingPageFooter from '../../Component/LandingPageFooter/LandingPageFooter';
import LandingAward from '../../Component/LandingAward/LandingAward';
import WhatWeDo from '../../Component/LandingWhatWeDo/WhatWeDo';
import LandingPrice from '../../Component/LandingPrice/LandingPrice';
import LandingchooseUs from '../../Component/LandingchooseUs/LandingchooseUs';
import LandingPatient from '../../Component/LandingPatient/LandingPatient';
import LandingFormHero from '../../Component/LandingFormHero/LandingFormHero';

const LandingPageView = () => {
  return (
    <>
      <LandingPageNavBar/>
      <LandingFormHero/>
      <LandingchooseUs/>
      <WhatWeDo/>
      <LandingPatient/>
      <LandingPrice/>
      <LandingAward/>
      <LandingPageFooter/>
    </>
  )
}

export default LandingPageView
