

import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-main">
      <h1 className="blog-heading">
        LATEST <span className="highlight">ARTICLES</span> FROM OUR BLOG POST
      </h1>

      <div className="blog-cards">
        <div className="blog-card">
          <img src="/Images/1.webp" className="blog-img" alt="" />

          <div className="blog-card-body">
            <h3 className="blog-title">THE IMPACT OF 3D MODELING IN CONSTRUCTION</h3>
            <p className="blog-text">
              3D modeling is reshaping the construction industry by improving visualization,
              collaboration, and cost estimation...
            </p>
            <a href="/blogs" className="blog-link">
              READ MORE <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="blog-card">
          <img src="/Images/2.webp" className="blog-img" alt="" />

          <div className="blog-card-body">
            <h3 className="blog-title">THE IMPACT OF SCAN TO BIM</h3>
            <p className="blog-text">
              Scan to BIM enhances accuracy and efficiency in construction and renovation...
            </p>
            <a href="/blogs" className="blog-link">
              READ MORE <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="blog-card">
          <img src="/Images/3.webp" className="blog-img" alt="" />

          <div className="blog-card-body">
            <h3 className="blog-title">LUXURY ON A BUDGET: INTERIOR DESIGN TIPS</h3>
            <p className="blog-text">
              Achieve luxury on a budget by investing in statement pieces, upgrading lighting...
            </p>
            <a href="/blogs" className="blog-link">
              READ MORE <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

