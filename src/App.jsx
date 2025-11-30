import { Route,Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/OurServices/Services";
import Project from "./components/OurProjects/Project";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footers/Footer";
import ContactUs from "./components/ContactUs/ContactUs";

const App = () => {
  return (
    <>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/contact-us" element={<ContactUs/>}></Route>
        <Route path="/our-projects" element={<Project/>}></Route>
        <Route path="/our-services" element={<Service/>}></Route>
      </Routes>
       <Footer />
    </>
  );
};

export default App;
