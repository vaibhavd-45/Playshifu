import React, { useState, useEffect, useRef } from 'react';
import './ProductPage.css';
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
} from "lucide-react";

import Footer from "./footer";
import AppGame from "./AppGame";
const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeMedia, setActiveMedia] = useState({ type: 'image', index: 0 });
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingReelIndex, setPlayingReelIndex] = useState(null);
  const videoCleanupRef = React.useRef(new Set());

  const videoRef = useRef(null);
  const reelVideoRefs = useRef([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://playshifu-n2a2.onrender.com/api/product');
        if (!response.ok) throw new Error('Failed to fetch product data');
        const data = await response.json();
        setProduct(data);
        if (data.videos?.length) setSelectedVideo(data.videos[0]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  const handleMediaSelect = (type, index) => {
    setActiveMedia({ type, index });
    if (type === 'video') {
      setSelectedVideo(product.videos[index]);
      setIsPlaying(false);
    }
  };

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const playReelVideo = (index) => {
    if (playingReelIndex !== null && playingReelIndex !== index) {
      reelVideoRefs.current[playingReelIndex]?.pause();
    }
    const videoElement = reelVideoRefs.current[index];
    if (videoElement) {
      videoElement.play();
      setPlayingReelIndex(index);
    }
  };

  const getPlaceholderUrl = (width = 640, height = 360) =>
    `https://via.placeholder.com/${width}x${height}/e2e8f0/3182ce?text=Playshifu+Video`;

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="error">No product found</div>;

  return (
    <div className="page-container">
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="marquee">
          <span>🎉 Special Offer: Get 25% off on all products! Use code: SHIFU25</span>
          <span>🚚 Free Shipping on orders above $50</span>
          <span>🔥 New Junior Genius Pack Available Now!</span>
          <span>⏱️ Limited Time Offer - Buy 2 Get 1 Free</span>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <div className="search-icon"><Search size={24} /></div>
            <div className="country-selector">
              <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India" className="country-flag" />
              <ChevronDown size={16} />
            </div>
          </div>
          <div className="logo">
            <img src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fbrand%2Fplayshifu-logo.webp&w=750&q=75" alt="PlayShifu" />
          </div>
          <div className="header-right">
            <div className="icon-btn cart-btn">
              <ShoppingCart size={24} />
              <span className="cart-count">0</span>
            </div>
            <div className="icon-btn"><User size={24} /></div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="main-navigation">
        <ul className="nav-menu">
          <li className="nav-item">Shop By Category <ChevronDown size={14} /></li>
          <li className="nav-item">Shop By Age <ChevronDown size={14} /></li>
          <li className="nav-item">
  <a href="https://www.playshifu.com/shop/category/super-saver-deals" target="_blank" rel="noopener noreferrer">
    Super Saver Deals <span className="sale-tag">25% Off</span>
  </a>
</li>

          <li className="nav-item">   <a href="https://www.playshifu.com/shop/category/birthday-gift-toys" target="_blank" rel="noopener noreferrer">Birthday Gifts <span className="sale-tag">25% Off</span> </a></li>
          <li className="nav-item"><a href="https://www.playshifu.com/return-gift" target="_blank" rel="noopener noreferrer">Return Gifts <span className="sale-tag">30% Off</span> </a></li>
          <li className="nav-item"><a href="https://www.playshifu.com/shop" target="_blank" rel="noopener noreferrer">Shop All </a> </li>
          <li className="nav-item">More <ChevronDown size={14} /></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">Educational toys that make learning fun!</h1>
          <p className="hero-subtitle">Interactive toys combining physical play with digital experiences.</p>
          <a href="#shop-now" className="hero-cta">Shop Now</a>
        </div>
        <div className="hero-shapes">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <a href="/">Home</a> <span>/</span>
        <a href="/toys">Educational Toys</a> <span>/</span>
        <span className="current">Junior Genius Pack</span>
      </div>

      {/* Product Section */}
      <div className="product-page">
        <div className="product-container">
          <div className="product-media">
            <div className="media-showcase">
              {activeMedia.type === 'image' ? (
                <div className="main-image">
                  <img src={product.images[activeMedia.index]} alt={product.name} />
                </div>
              ) : (
                <div className="main-video">
                  <video
                    ref={videoRef}
                    controls
                    poster={selectedVideo.thumbnail || getPlaceholderUrl()}
                    className="video-player"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src={selectedVideo.url} type="video/mp4" />
                  </video>
                  {!isPlaying && (
                    <div className="video-overlay" onClick={playVideo}>
                      <div className="play-button">▶</div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="media-thumbnails">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  className={`media-thumbnail ${activeMedia.type === 'image' && activeMedia.index === i ? 'active' : ''}`}
                  onClick={() => handleMediaSelect('image', i)}
                >
                  <img src={img} alt={`${product.name} ${i}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="product-details">
            <h1>{product.name}</h1>
            <div className="product-links">
              <a href="https://www.playshifu.com/product/plugo-counting-toy">Plugo Count</a>
              <a href="https://www.playshifu.com/product/plugo-letter-alphabet-toy">Plugo Letters</a>
              <a href="https://www.playshifu.com/product/plugo-link-magnetic-building-blocks">Plugo Link</a>
            </div>
            <div className="rating-row">
              <div className="rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < Math.floor(4.5) ? 'star filled' : 'star'}>★</span>
                ))}
                <span className="reviews">(237 Reviews)</span>
              </div>
              <div className="share-button">Share ↗</div>
            </div>
            <div className="price-row">
              <div className="sale-price">₹3749</div>
              <div className="original-price">₹4999</div>
            </div>
            <div className="product-offer-tags">
              <div className="offer-tag">Free Downloads Worth ₹499</div>
              <div className="offer-tag">Save 25% Off</div>
              <div className="offer-tag">Super Saver Deal</div>
            </div>
            <div className="product-features">
              {product.features.map((feat, i) => (
                <div key={i} className="product-feature">• {feat}</div>
              ))}
            </div>
            <div className="button-container">
              <button className="add-to-cart-btn">Add To Cart</button>
              <button className="buy-now-btn">Buy Now</button>
            </div>
            <div className="device-note">
              <p>• Device required. Not included with the toy.</p>
              <p>• Check your device compatibility below.</p>
            </div>
          </div>
        </div>
        <div className="product-guide">
          <div className="guide-header">
            <h2>Product Guide</h2>
            <button onClick={() => window.open("https://d3no6xaq2ua3a6.cloudfront.net/docs/guides-for-skus/super-saver/letters-link-count.pdf", "_blank")}>
  Download Product Guide
</button>

          </div>
        </div>

        {/* Reels */}
        <div className="reel-videos-section">
          <h2>Product Reels</h2>
          <div className="reel-videos-container">
            {product.reelvideos.map((reelVideo, index) => (
              <div key={index} className="reel-video-card">
                <div className="reel-video-wrapper">
                  <video
                    className="reel-video-player"
                    controls
                    poster={reelVideo.thumbnail}
                    preload="none"
                    ref={(el) => {
                      if (el) {
                        reelVideoRefs.current[index] = el;
                        videoCleanupRef.current.delete(index);
                      } else {
                        videoCleanupRef.current.add(index);
                        if (playingReelIndex === index) {
                          setPlayingReelIndex(null);
                        }
                      }
                    }}
                    onPlay={() => {
                      if (!videoCleanupRef.current.has(index)) {
                        setPlayingReelIndex(index);
                      }
                    }}
                    onPause={() => {
                      if (playingReelIndex === index && !videoCleanupRef.current.has(index)) {
                        setPlayingReelIndex(null);
                      }
                    }}
                    onEnded={() => {
                      if (playingReelIndex === index && !videoCleanupRef.current.has(index)) {
                        setPlayingReelIndex(null);
                      }
                    }}
                  >
                    <source src={reelVideo.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {playingReelIndex !== index && !videoCleanupRef.current.has(index) && (
                  <div 
                    className="reel-video-overlay" 
                    onClick={(e) => {
                      e.preventDefault();
                      playReelVideo(index);
                    }}
                  >
                    <div className="reel-play-button">▶</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Product About Section */}
        <div className="product-about">
          <h2>About</h2>
          <div className="product-features-grid">
            {product.juniorpack.map((item, i) => (
              <div className="feature-card" key={i}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What's In The Box */}
        <div className="whats-in-box">
          <h2>In The Box</h2>
          <div className="box-items">
            {product.inthebox.map((item, i) => (
              <div className="box-item" key={i}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Free In-App Games */}
        {/* <div className="free-games">
          <h2>Free In-App Games</h2>
          <div className="games-grid">
            {product.freeinapp.map((item, i) => (
              <div className="game-card" key={i}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div> */}
        <AppGame />

        {/* Device Compatibility */}
        <div className="device-compatibility">
          <h2>Device Compatibility</h2>
          <div className="device-grid">
            <div className="device-card"><h3>Android</h3><p>Android 6.0+ with Bluetooth 4.1</p></div>
            <div className="device-card"><h3>iOS</h3><p>iOS 11+ with Bluetooth 4.1</p></div>
            <div className="device-card"><h3>Amazon Fire</h3><p>Fire OS 5.0+ with Bluetooth 4.1</p></div>
          </div>
        </div>

        {/* Related Products */}
        <div className="also-bought">
  <h2>Parents Also Bought</h2>
  <div className="related-products">
    {product.alsobought.map((item, i) => (
      <div className="related-product" key={i}>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <img src={item.image} alt={item.title} />
        </a>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="related-price">₹{item.price.toFixed(2)}</div>
        <button>Add to Cart</button>
      </div>
    ))}
  </div>
</div>
</div>


      <Footer />
    </div>
  );
};

export default ProductPage;
