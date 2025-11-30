import "./About.css";

const About = () => {
  return (
    <div className="About-top container">
      <div className="About-d">
        <div className="img-div">
          <img
            src="/Images/3ddb4b93-1f42-45b3-9317-fe91f8ae09a4.jpg"
            alt=""
            className="About-img"
          />
        </div>
        <div className="About-marg">
          <h1 className="About-h1">
            Welcome to{" "}
            <span className="About-span">Rai Construction Solutions</span>
          </h1>
          <p className="About-p">
            At Rai Construction Solutions, we bring your construction vision to
            life with precision, innovation, and expertise. We are your trusted
            partner in comprehensive construction consultancy, offering a wide
            range of specialized services tailored to meet every project
            requirement. Our expertise spans various domains, ensuring seamless
            execution to the highest standards.
          </p>
          <div className="About-div">
            <div className="About-content">
              <p className="content-p">
                <span className="content-span">3D Modeling Services:</span>
                Transforming concepts into detailed 3D models for accurate
                project visualization.
              </p>
            </div>
            <div className="About-content">
              <p className="content-p">
                <span className="content-span">Construction Drawings:</span>
                Delivering precise and efficient construction blueprints for
                seamless execution.
              </p>
            </div>
            <div className="About-content">
              <p className="content-p">
                <span className="content-span">Quantity Take-Off:</span>{" "}
                Providing accurate material and cost estimations to optimize
                your project budget.
              </p>
            </div>
            <div className="About-content">
              <p className="content-p">
                <span className="content-span">Scan to BIM (Point Cloud):</span>
                Converting point cloud data into intelligent BIM models for
                renovations or as-built projects.
              </p>
            </div>
            <div className="About-content">
              <p className="content-p">
                <span className="content-span">Interior Designing:</span>{" "}
                Creating functional and aesthetically pleasing interior spaces
                that reflect your vision.
              </p>
            </div>
            <div className="About-content">
              <p className="content-p">
                <span className="content-span">
                  3D Renders and Walkthroughs:
                </span>
                Immersive visuals and virtual walkthroughs to bring your ideas
                to life before construction begins.
              </p>
            </div>
          </div>
            <button className="button-btn"><a href="/our-services">Our Services </a><i className="fa-solid fa-arrow-right Icon-btn"></i></button>
        </div>
      </div>
    </div>
  );
};

export default About;
