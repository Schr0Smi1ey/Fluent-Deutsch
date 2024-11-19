import React from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Success from "./Success/Success";
import FeaturedCourses from "./FeaturedCourses/FeaturedCourses";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <About></About>
      <Success></Success>
      <FeaturedCourses></FeaturedCourses>
    </div>
  );
};

export default Home;
