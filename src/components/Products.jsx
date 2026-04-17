import { useState } from 'react';
import royalJelly1000 from '../assets/royal-jelly-1000mg.png';
import royalJelly1500 from '../assets/royal-jelly-1500mg.png';
import royalJellyCapsule from '../assets/royal-jelly-capsule.avif';
import royalJellyEff from '../assets/royal-jelly-effervescent.avif';
import astaxanthin from '../assets/astaxanthin.avif';
import fishOil from '../assets/fish-oil.avif';
import propolis from '../assets/propolis-toothpaste.avif';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'Royal Jelly 1000mg',
    size: '365 Capsules',
    category: 'Royal Jelly',
    description: 'Our best-selling Royal Jelly formula. Packed with naturally occurring vitamins, minerals, and amino acids to support energy, immunity, and skin vitality.',
    benefits: ['Energy & vitality', 'Immune support', 'Skin health'],
    image: royalJelly1000,
  },
  {
    id: 2,
    name: 'Royal Jelly 1000mg',
    size: '120 Capsules',
    category: 'Royal Jelly',
    description: 'The same premium Royal Jelly formula in a convenient starter size — perfect for those new to the Nature\'s King range.',
    benefits: ['Energy & vitality', 'Immune support', 'Skin health'],
    image: royalJellyCapsule,
  },
  {
    id: 3,
    name: 'Royal Jelly 1500mg',
    size: '180 Capsules',
    category: 'Royal Jelly',
    description: 'Our high-strength Royal Jelly for those seeking extra potency. Ideal for adults wanting maximum support from this superb natural product.',
    benefits: ['High-strength formula', 'Hormonal balance', 'Anti-aging'],
    image: royalJelly1500,
  },
  {
    id: 4,
    name: 'Royal Jelly Effervescent',
    size: '20 Tablets + Vitamin C',
    category: 'Royal Jelly',
    description: 'A refreshing effervescent tablet combining Royal Jelly with Vitamin C. Dissolves quickly for fast absorption and a delicious citrus taste.',
    benefits: ['Fast absorption', 'Immune boost', 'Antioxidant'],
    image: royalJellyEff,
  },
  {
    id: 5,
    name: 'Astaxanthin',
    size: '45 Mini Capsules',
    category: 'Antioxidant',
    description: 'One of the most powerful natural antioxidants. Our Astaxanthin mini capsules support eye health, skin protection, and reduce oxidative stress.',
    benefits: ['Powerful antioxidant', 'Eye & skin health', 'Anti-inflammatory'],
    image: astaxanthin,
  },
  {
    id: 6,
    name: 'Fish Oil Omega-3 + Vitamin D',
    size: '120 Mini Capsules',
    category: 'Omega-3',
    description: 'Premium Fish Oil enriched with Vitamin D3 in convenient mini capsules. Supports heart health, brain function, and strong bones.',
    benefits: ['Heart health', 'Brain function', 'Bone strength'],
    image: fishOil,
  },
  {
    id: 7,
    name: 'Propolis Toothpaste',
    size: '120g',
    category: 'Oral Care',
    description: 'A natural toothpaste enriched with Australian Propolis. Provides antibacterial protection, supports gum health, and leaves your mouth feeling fresh.',
    benefits: ['Antibacterial', 'Gum health', 'Fresh breath'],
    image: propolis,
  },
];

const categories = ['All', 'Royal Jelly', 'Antioxidant', 'Omega-3', 'Oral Care'];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="products">
      <div className="products-header">
        <p className="section-label">Our Range</p>
        <h2 className="section-title">Premium Natural Products</h2>
        <div className="gold-divider centered"></div>
        <p className="products-intro">
          Every Nature's King product is formulated with premium natural ingredients,
          rigorously tested and proudly made in Australia.
        </p>
      </div>

      <div className="category-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filtered.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} className="product-image" />
              <span className="product-category-tag">{product.category}</span>
            </div>
            <div className="product-body">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-size">{product.size}</p>
              <p className="product-desc">{product.description}</p>
              <ul className="product-benefits">
                {product.benefits.map((b, i) => (
                  <li key={i}><span className="benefit-dot"></span>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
