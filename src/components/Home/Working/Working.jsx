import "./Working.css";

const Working = () => {
  return (
    <div className="Working-top container">
      <div>
        <h1 className="Working-h">
          Our <span className="Working-span">Vision</span>
        </h1>
        <h2 className="Working-span">
          Revolutionizing Construction with innovation & Technology{" "}
        </h2>
        <p className="Working-p1">
          At <span className="Working-span">Rai Construction Solutions</span>,
          our vision is to{" "}
          <span className="Working-span">
            revolutionize the construction industry
          </span>{" "}
          by providing{" "}
          <span className="Working-span">
            innovative, technology-driven solutions
          </span>{" "}
          that bridge the gap between design and execution.
        </p>
        <p className="Working-p2">
          We aim to be a{" "}
          <span className="Working-span">one-stop consultancy partner</span>,
          empowering architects, contractors, and developers with precise 3D
          modeling, accurate planning, and immersive visualizations.
        </p>
        <div>
          <ul className="ul-l1">
            <li>
              <span>
                <i className="fa-solid fa-bullseye icons"></i> Precise 3D
                Modeling
              </span>
            </li>
            <li>
              <span>
                <i className="fa-solid fa-lightbulb icons"></i> Accurate
                Planning
              </span>
            </li>
            <li>
              <span>
                <i className="fa-solid fa-eye icons"></i> Immersive
                Visualizations
              </span>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-gear icons"></i> Construction Drawings
              </p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-award icons"></i> BIM Modeling
              </p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-bolt icons"></i> BIM Modeling
              </p>
            </li>
          </ul>
        </div>
        <div>
          <p className="Working-p1">
            We envision a future where every project is executed efficiently,
            clearly, and creatively—transforming ideas into reality with
            precision and excellence.
          </p>{" "}
          <p className="Working-p1">
            Our commitment is to innovation, quality, and client satisfaction.
            We ensure every project benefits from smarter designs, optimized
            resources, and seamless execution.
          </p>
        </div>
      </div>
      <div>
        <img src="/Images/1.webp" alt="" className="Working-img " />
      </div>
      
    
    </div>
    
  );
};

export default Working;
