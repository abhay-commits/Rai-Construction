import { useRef } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -75) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div>
      <div className="testimonials container">
        <h1 className="Project-h">
          What Our <span className="Working-span">Happy </span>Clients Say
        </h1>
        <p className="Para-p">
          Don't just take our word for it. Here's what our satisfied clients say
          about their experience working with Rai Construction Solutions.
        </p>
      </div>

      <div className="testimonials-d">
        <i className="fa-solid fa-arrow-right next-btn" onClick={slideForward}></i>
        <i className="fa-solid fa-arrow-left back-btn" onClick={slideBackward}></i>

        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <i className="fa-solid fa-quote-right quote"></i>
                <div className="div-ul">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="userinfo">
                  <p>
                    "Rai Construction Solutions turned our dream home into reality! From the initial 3D modeling to the final execution, their team ensured every detail was perfect. The stunning renders helped us visualize everything in advance, making the entire process seamless. Highly professional and creative!"
                  </p>
                  <h4 className="test-h3">A. Mehta</h4>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <i className="fa-solid fa-quote-right quote"></i>
                <div className="div-ul">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="userinfo">
                  <p>
                    "We needed a modern yet functional design for our townhouse project, and Rai Construction Solutions delivered beyond our expectations. Their quantity take-off services ensured we stayed within budget while their 3D walkthroughs helped us make informed decisions. Highly recommended!"
                  </p>
                  <h4 className="test-h3">V. Sharma</h4>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <i className="fa-solid fa-quote-right quote"></i>
                <div className="div-ul">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="userinfo">
                  <p>
                    "The expertise and attention to detail shown by Rai Construction Solutions are unmatched. Their architectural planning, BIM services, and interior design suggestions were exceptional. Tranquil Crest wouldn’t have been the same without their innovative approach!"
                  </p>
                  <h4 className="test-h3">S. Roy</h4>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <i className="fa-solid fa-quote-right quote"></i>
                <div className="div-ul">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="userinfo">
                  <p>
                    "What sets Rai Construction Solutions apart is their ability to blend creativity with technical precision. Their Scan to BIM services saved us a lot of time in renovation, and their consultancy ensured smooth execution. A fantastic experience overall!"
                  </p>
                  <h4 className="test-h3">R. Kapoor</h4>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="Test-div">
          <ul className="Test-ul">
            <li>
              <h1 className="Working-span h4">35+</h1>
              <p>Projects delivered</p>
            </li>
            <li>
              <h1 className="Working-span h4">5+</h1>
              <p>Expert Team Members</p>
            </li>
            <li>
              <h1 className="Working-span h4">4+</h1>
              <p>Years Of Experience</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
