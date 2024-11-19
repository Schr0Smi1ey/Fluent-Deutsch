import React from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Success from "./Success/Success";
import FeaturedCourses from "./FeaturedCourses/FeaturedCourses";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <About></About>
      <Success></Success>
      <FeaturedCourses></FeaturedCourses>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
