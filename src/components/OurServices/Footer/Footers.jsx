import "./Footers.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="footer-col">
        <img src="/image/logo2.jpg" alt="Logo" className="footer-logo" />
        <h3 className="footer-title">Rai Construction Solutions</h3>

        <p className="footer-text">
          Your trusted partner in comprehensive construction consultancy,
          bringing precision, innovation, and expertise to every project.
        </p>

        <p className="footer-item">
          <i className="fa-solid fa-location-dot icon"></i> Jodhpur, Rajasthan, India
        </p>
        <p className="footer-item">
          <i className="fa-solid fa-phone icon"></i> +91 8003431008
        </p>
        <p className="footer-item">
          <i className="fa-solid fa-envelope icon"></i> info@raiconstruction.com
        </p>
        <p className="footer-item">
          <i className="fa-solid fa-clock icon"></i> Mon–Sat: 9:00 AM – 6:00 PM
        </p>
      </div>
      <div className="footer-col">
        <h3 className="footer-title">Quick Links</h3>
        <ul className="footer-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Our Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-col">
        <h3 className="footer-title">Our Services</h3>
        <ul className="footer-list">
          <li>BIM 3D Modeling</li>
          <li>Construction Documents</li>
          <li>Scan to BIM</li>
          <li>3D Renders & Walkthroughs</li>
          <li>Interior Designing</li>
          <li>Quantity Take-Off</li>
        </ul>
      </div>
      <div className="footer-col">
        <h3 className="footer-title">Stay Connected</h3>
        <p className="footer-text">Follow us for the latest updates and construction insights.

</p>

        <div className="footer-socials">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>

        <form className="footer-form">
          <label className="footer-label">Newsletter Signup</label>
          <input type="email" placeholder="Enter your email" className="footer-input" />
          <button className="footer-btn">Subscribe</button>
        </form>
      </div >
    </div>
  );
};

export default Contact;