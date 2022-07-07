import React from "react";
import Contact from "../Components/Contact";
import Courses from "../Components/Courses";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <Services />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
