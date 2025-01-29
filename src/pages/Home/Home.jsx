import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import StayUpToDate from "../../components/StayUpToDate/StayUpToDate";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <StayUpToDate/>
      <About/>
      <Footer/>
    </div>
  );
};

export default Home;
