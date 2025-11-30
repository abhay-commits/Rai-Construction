import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Working from "./Working/Working";
import Service from "./Services/Service";
import Projects from "./Projects/Projects";
import Testimonials from "./Testimonials/Testimonials";
import Blog from "./Blogs/Blog";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Working />
      <Service />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
