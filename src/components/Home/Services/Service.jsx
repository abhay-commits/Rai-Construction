import "./Service.css";

const Service = () => {
  return (
    <div className="Service-top">
      <div className="Service-d">
        <h1 className="Service-h">
          Our <span className="Working-span">Expert</span> Services
        </h1>
        <p className="Service-p">
          We offer a comprehensive range of specialized services tailored to
          meet every project requirement. Our expertise spans various domains,
          ensuring seamless execution to the highest standards.
        </p>
      </div>
      <div className="card-main">
        <div className="card-container">
          <div className="card">
            <img
              src="/Images/2c2d110d-e9e6-4c76-ab65-a66c138b506b.jpg"
              alt=""
              className="card-img"
            />
            {/* <div className="caption">
              <i className="fa-solid fa-arrow-right captions"></i>
            </div> */}
            <div className="card-body container">
              <h5 className="card-title ">BIM 3D Modeling</h5>
              <p className="card-texts">
                Enhance project accuracy with intelligent 3D models integrating
                architectural, structural, and MEP components for seamless
                planning and execution.
              </p>
              <div className="Working-span Service-b">
                <a href="/our-services">
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img
              src="/Images/93408d85-d977-4a35-a7ee-54a55bf54713.jpg"
              alt=""
              className="card-img"
            />
            <div className="card-body container">
              <h5 className="card-title ">Construction Documents</h5>
              <p className="card-texts">
                Comprehensive architectural, structural, and MEP plans ensuring compliance, minimizing errors, and improving project execution.
              </p>
              <div className="Working-span Service-b ">
                <a href="/our-services">
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img
              src="/Images/scan-to-bim-800x400.jpg"
              alt=""
              className="card-img"
            />
            <div className="card-body container">
              <h5 className="card-title ">Scan to BIM</h5>
              <p className="card-texts">
                Convert laser scan data into accurate BIM models for enovation, retrofits and as-built documentation, improving precision and efficiency.
              </p>
              <div className="Working-span Service-b ">
                <a href="/our-services">
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img
              src="/Images/9dc42f87-a6da-4e88-b232-cb42913e27c1.jpg"
              alt=""
              className="card-img"
            />
            <div className="card-body container">
              <h5 className="card-title ">Renders and walkthroughs</h5>
              <p className="card-texts">
                Experiance projects before construction with high quality 3D renders, fuction layout and interactive walkthrough for better visualization and decision-making.
              </p>
              <div className="Working-span Service-b ">
                <a href="/our-services">
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img
              src="/Images/7f84e32c-79d1-4487-9741-f87197f6caae.jpg"
              alt=""
              className="card-img"
            />
            <div className="card-body container">
              <h5 className="card-title ">Interior designing</h5>
              <p className="card-texts">
                Transform spaces with creative designs, functional layouts, high-quality 3D renders and aesthetic enhancements tailored to residential and commercial needs.
              </p>
              <div className="Working-span Service-b ">
                <a href="/our-services">
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img
              src="/Images/3ddb4b93-1f42-45b3-9317-fe91f8ae09a4.jpg"
              alt=""
              className="card-img"
            />
            <div className="card-body container">
              <h5 className="card-title ">Quantity Take-Off</h5>
              <p className="card-texts">
                Accurate estimation of materials and costs using BIM and detailed drawings,creative designs, functional layouts, ensuring optimized resource allocation and cost efficiency.
              </p>
              <div className="Working-span Service-b ">
                <a href="our-services">
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
