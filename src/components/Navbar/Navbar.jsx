

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [first, setfirst] = useState(false)
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        if (window.scrollY > 50) {
          setfirst(true);

          setSticky(true);
        } else {
          setSticky(false);
        }
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const toggleMenu = () => setMobileMenu(!mobileMenu);
  const isHome = location.pathname === "/";
  const navClass = isHome && !sticky ? "navbar-container transparent-nav" : "navbar-container";

  const isActive = (path) => location.pathname === path;


  return (
    <nav className={`${navClass} ${sticky ? "dark-nav " : ""}`}>
      <div className="nav-top">
        <a href="#">
          <img src="image/logo1.jpg" alt="" className="logo" />
        </a>
        <a href="#">
          <p className="nav-title">Rai Construction Solutions</p>
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      <ul className={mobileMenu ? "nav-links active" : "nav-links"}>
        <li><Link 
        to="/" 
        onClick={() => setMobileMenu(false)}
         className={isActive("/") ? "active-link" : ""}
        >Home</Link></li>
        <li><Link to="/about-us" onClick={() => setMobileMenu(false)}  className={isActive("/about-us") ? "active-link" : ""}>About Us</Link></li>
        <li><Link to="/our-services" onClick={() => setMobileMenu(false)}
         className={isActive("/our-services") ? "active-link" : ""}
        >Our Services</Link></li>
        <li><Link to="/our-projects" onClick={() => setMobileMenu(false)}
         className={isActive("/our-projects") ? "active-link" : ""}
        >Our Projects</Link></li>
        <li><Link to="/blogs" onClick={() => setMobileMenu(false)}>Blogs</Link></li>
        <li><Link to="/contact-us" onClick={() => setMobileMenu(false)}>Contact Us</Link></li>
        <li><button className="btn-nav">Get Quote</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
