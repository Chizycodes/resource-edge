import React from "react";
import Hero from "../Hero";
import HR from "../HR";
import AdminLogistics from "../AdminLogistics";
import NavBar from '../NavBar'

const LandingPage = () => {
  return (
    <div className="landing">
      <NavBar />
      <Hero />
      <HR />
      <AdminLogistics />
    </div>
  );
};

export default LandingPage;
