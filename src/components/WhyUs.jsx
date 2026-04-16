import './WhyUs.css';

const WhyUs = () => {
  return (
    <section id="why" className="whyus">
      <div className="whyus-inner">
        <div className="whyus-text">
          <p className="section-label">Why Nature's King</p>
          <h2 className="section-title">The Gold Standard<br />in Natural Health</h2>
          <div className="gold-divider"></div>
          <p className="whyus-description">
            For over 25 years, Nature's King has set the benchmark for natural health
            supplements in Australia and beyond. Our commitment to quality, purity,
            and efficacy is unwavering.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <div className="feature-content">
                <h4>GMP Certified Manufacturing</h4>
                <p>Every product is manufactured in GMP-certified facilities, ensuring the highest standards of quality and safety.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">02</div>
              <div className="feature-content">
                <h4>Premium Sourcing</h4>
                <p>We carefully select only the finest natural raw materials from trusted, sustainable sources.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">03</div>
              <div className="feature-content">
                <h4>Rigorous Testing</h4>
                <p>Every batch undergoes comprehensive testing to guarantee purity, potency, and safety before reaching you.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-number">04</div>
              <div className="feature-content">
                <h4>Trusted Globally</h4>
                <p>Distributed across multiple countries, Nature's King is a brand trusted by health-conscious consumers worldwide.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="whyus-visual">
          <div className="visual-card main-card">
            <div className="crown-icon">👑</div>
            <h3>Nature's King</h3>
            <p className="visual-tagline">Feel Like Gold</p>
            <div className="visual-stats">
              <div>
                <strong>25+</strong>
                <span>Years</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Natural</span>
              </div>
              <div>
                <strong>GMP</strong>
                <span>Certified</span>
              </div>
            </div>
          </div>
          <div className="visual-card side-card">
            <span>🌿</span>
            <p>Australian Made</p>
          </div>
          <div className="visual-card side-card bottom">
            <span>🔬</span>
            <p>Lab Tested</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
