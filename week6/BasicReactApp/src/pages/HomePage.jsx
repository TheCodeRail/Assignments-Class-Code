import React from "react";
import Navabar from "../components/Navabar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footbar from "../components/Footbar";

/// what ever the state we are getting from the parent will know as the prop in this child component
const HomePage = () => {
  return (
    <>
      <Navabar />
      <Hero />
      <About />
      <Footbar />
    </>
  );
};

export default HomePage;
