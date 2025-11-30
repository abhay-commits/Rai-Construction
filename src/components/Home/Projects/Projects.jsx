import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h1>
          Some of Our Popular <span className="highlight">Dream</span> Projects
        </h1>
        <p>
          Explore our portfolio of exceptional construction projects that
          showcase our expertise in delivering innovative solutions and
          architectural excellence.
        </p>
      </div>

 
      <div className="projects-grid">

        <div className="project-card">
          <img
            src="/Images/Moonstone Villa.jpg"
            alt="Moonstone Villa"
          />
          <div className="project-content">
            <h3>Moonstone Villa</h3>
            <p>
              A stunning modern architectural masterpiece blending contemporary
              aesthetics with natural textures.
            </p>
            <a href="/our-projects" className="read-more">
              READ MORE <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src="/Images/Tranquil Crest.jpg"
            alt="Tranquil Crest"
          />
          <div className="project-content">
            <h3>Tranquil Crest</h3>
            <p>
              A blend of modern sophistication with classical charm, featuring
              arched windows and ornamental patterns.
            </p>
            <a href="/our-projects" className="read-more">
              READ MORE <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src="/Images/Lilyfield House.jpg"
            alt="Lilyfield House"
          />
          <div className="project-content">
            <h3>Lilyfield House</h3>
            <p>
              A modern townhouse with a clean geometric façade, integrating
              natural wood and glass elements.
            </p>
            <a href="/our-projects" className="read-more">
              READ MORE <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

      </div>
      <a href="/our-projects" className="view-all-btn">
        View All Projects <i className="fa-solid fa-arrow-right"></i>
      </a>
    </section>
  );
};

export default Projects;

