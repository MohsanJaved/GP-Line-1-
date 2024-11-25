import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPageView from "../View/LandingPageView/LandingPageView";

const OurRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPageView/>} />

      </Routes>
    </>
  );
};

export default OurRoutes;
