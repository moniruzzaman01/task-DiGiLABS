import React from "react";
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
    </div>
  );
};

export default Home;
