import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-left">
          <div className="about-image-frame">
            <div className="about-image-inner">
              <div className="about-year">Est. 2000</div>
              <div className="about-image-decoration"></div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <p className="section-label">Our Story</p>
          <h2 className="section-title">Rooted in Nature,<br />Committed to You</h2>
          <div className="gold-divider"></div>
          <p className="about-text">
            Since 2000, Nature's King has been dedicated to bringing the finest natural health
            supplements from Australia to the world. Our journey began with a simple belief —
            that nature holds the most powerful ingredients for human wellness.
          </p>
          <p className="about-text">
            Every product in our range is crafted under strict GMP (Good Manufacturing Practice)
            standards, using premium natural ingredients sourced responsibly. From Royal Jelly
            harvested from pristine Australian apiaries to potent Astaxanthin — we bring
            nature's best to your daily routine.
          </p>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">25+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">7+</span>
              <span className="stat-label">Premium Products</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Natural Ingredients</span>
            </div>
          </div>
        </div>
      </div>

      <div className="values-section">
        <div className="value-card">
          <div className="value-icon">🌿</div>
          <h3>Natural Integrity</h3>
          <p>Only the purest, most potent natural ingredients in every capsule.</p>
        </div>
        <div className="value-card">
          <div className="value-icon">🔬</div>
          <h3>Science-Backed</h3>
          <p>Formulations guided by research and manufactured to GMP standards.</p>
        </div>
        <div className="value-card">
          <div className="value-icon">🇦🇺</div>
          <h3>Australian Made</h3>
          <p>Proudly manufactured in Australia with world-class quality control.</p>
        </div>
        <div className="value-card">
          <div className="value-icon">💛</div>
          <h3>Wellness First</h3>
          <p>Your daily wellbeing is at the heart of everything we create.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
