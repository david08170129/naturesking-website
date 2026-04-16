import './Footer.css';

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="brand-natures">Nature's</span>
            <span className="brand-king">King</span>
          </div>
          <p className="footer-tagline">"Feel Like Gold"</p>
          <p className="footer-about">
            Premium Australian-made natural health supplements since 2000.
            Committed to quality, purity, and your wellbeing.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li><button onClick={() => scrollTo('hero')}>Home</button></li>
            <li><button onClick={() => scrollTo('about')}>About Us</button></li>
            <li><button onClick={() => scrollTo('products')}>Products</button></li>
            <li><button onClick={() => scrollTo('why')}>Why Us</button></li>
          </ul>
        </div>

        <div className="footer-products">
          <h4>Products</h4>
          <ul>
            <li>Royal Jelly 1000mg</li>
            <li>Royal Jelly 1500mg</li>
            <li>Royal Jelly Effervescent</li>
            <li>Astaxanthin</li>
            <li>Fish Oil Omega-3 + Vit D</li>
            <li>Propolis Toothpaste</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>60 Huntingwood Drive,<br />Huntingwood NSW 2148,<br />Australia</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <a href="mailto:info@aunew.com">info@aunew.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🌐</span>
            <a href="https://www.aunew.com" target="_blank" rel="noopener noreferrer">www.aunew.com</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nature's King. All rights reserved. A brand by Aunew Group.</p>
        <p className="footer-made">Made in Australia 🇦🇺</p>
      </div>
    </footer>
  );
};

export default Footer;
