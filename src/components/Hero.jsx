import './Hero.css';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-tagline-top">Australian Natural Supplements</p>
        <h1 className="hero-title">
          Nature's <span>King</span>
        </h1>
        <p className="hero-subtitle">Feel Like Gold</p>
        <p className="hero-description">
          Premium Australian-made natural health supplements since 2000.
          Crafted with the finest natural ingredients to support your daily wellness.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={scrollToProducts}>Explore Products</button>
          <button className="btn-secondary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>Our Story</button>
        </div>
        <div className="hero-badges">
          <div className="badge">
            <span className="badge-icon">🌿</span>
            <span>100% Natural</span>
          </div>
          <div className="badge">
            <span className="badge-icon">🇦🇺</span>
            <span>Made in Australia</span>
          </div>
          <div className="badge">
            <span className="badge-icon">✅</span>
            <span>GMP Certified</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
};

export default Hero;
