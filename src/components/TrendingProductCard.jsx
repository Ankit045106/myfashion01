// import React, { useState } from 'react';
// import { Heart, ShoppingCart, Zap, TrendingUp, Share2 } from 'lucide-react';

// const TrendingProductCard = ({product}) => {
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [selectedSize, setSelectedSize] = useState('M');

//   return (
//     <>

//       <div className="custom-trending-product-card">
//         {/* Floating Trending Badge */}
//         <div className="custom-trending-product-floating-badge">
//           <TrendingUp className="custom-trending-product-floating-badge-icon" size={16} />
//           <span className="custom-trending-product-floating-badge-text">{product.trending}</span>
//         </div>

//         <div className="custom-trending-product-card-inner">
//           {/* Image Section */}
//           <div className="custom-trending-product-img-wrapper">
//             <img 
//               src={product.mainImage} 
//               alt={product.name}
//               className="custom-trending-product-main-img"
//             />
//             <img 
//               src={product.hoverImage} 
//               alt={product.name}
//               className="custom-trending-product-hover-img"
//             />

//             {/* Trending Badge */}
//             <div className="custom-trending-product-trending-badge">
//               <Zap size={14} />
//               Trending
//             </div>

//             {/* Stock Badge */}
//             <div className="custom-trending-product-stock-badge">
//               {product.stock}
//             </div>

//             {/* Quick Action Icons */}
//             <div className="custom-trending-product-quick-icons">
//               <button 
//                 className={`custom-trending-product-icon-btn ${isWishlisted ? 'active' : ''}`}
//                 onClick={() => setIsWishlisted(!isWishlisted)}
//                 aria-label="Add to wishlist"
//               >
//                 <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
//               </button>
//               <button 
//                 className="custom-trending-product-icon-btn"
//                 aria-label="Quick view"
//               >
//                 <Zap size={20} />
//               </button>
//               <button 
//                 className="custom-trending-product-icon-btn"
//                 aria-label="Share"
//               >
//                 <Share2 size={20} />
//               </button>
//             </div>

//             {/* Timer Progress Bar */}
//             <div className="custom-trending-product-timer-bar">
//               <div className="custom-trending-product-timer-progress"></div>
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="custom-trending-product-content">
//             {/* Header with Category and Timer */}
//             <div className="custom-trending-product-header">
//               <div className="custom-trending-product-category">
//                 <TrendingUp size={12} />
//                 {product.category}
//               </div>
//               <div className="custom-trending-product-timer">
//                 <div className="custom-trending-product-timer-label">Ends in</div>
//                 <div className="custom-trending-product-timer-value">{product.timeLeft}</div>
//               </div>
//             </div>

//             {/* Product Name */}
//             <h3 className="custom-trending-product-name">{product.name}</h3>

//             {/* Stats */}
//             <div className="custom-trending-product-stats">
//               <div className="custom-trending-product-stat">
//                 <TrendingUp className="custom-trending-product-stat-icon" size={18} />
//                 <span className="custom-trending-product-stat-text">
//                   <span className="custom-trending-product-stat-value">{product.soldCount}</span> sold
//                 </span>
//               </div>
//               <div className="custom-trending-product-stat">
//                 <Zap className="custom-trending-product-stat-icon" size={18} />
//                 <span className="custom-trending-product-stat-text">
//                   <span className="custom-trending-product-stat-value">Fast</span> shipping
//                 </span>
//               </div>
//             </div>

//             {/* Size Selection */}
//             <div className="custom-trending-product-sizes">
//               <label className="custom-trending-product-size-label">Select Size:</label>
//               <div className="custom-trending-product-size-options">
//                 {product.sizes.map((size) => (
//                   <button
//                     key={size}
//                     className={`custom-trending-product-size-btn ${selectedSize === size ? 'active' : ''}`}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Price Section */}
//             <div className="custom-trending-product-price-section">
//               <div className="custom-trending-product-prices">
//                 <div className="custom-trending-product-price">${product.price}</div>
//                 <div className="custom-trending-product-price-details">
//                   <span className="custom-trending-product-original-price">${product.originalPrice}</span>
//                   <span className="custom-trending-product-discount">
//                     {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Add to Cart Button */}
//             <button className="custom-trending-product-add-to-cart">
//               <ShoppingCart size={22} />
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TrendingProductCard;


import React, { useState } from 'react';
import { Heart, ShoppingCart, Zap, TrendingUp, Share2, Star } from 'lucide-react';

const TrendingProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fallback values if properties don't exist
  const {
    id,
    name = "Product Name",
    price = 0,
    originalPrice = 0,
    // description = "",
    images = [],
    category = "Fashion",
    badge = "New",
    discount = 0,
    rating = 0,
    reviews = 0,
    colors = []
  } = product;

  const mainImage = images[0] || "/placeholder.jpg";
  const hoverImage = images[1] || images[0] || "/placeholder.jpg";

  return (
    <div className="custom-trending-product-card">
      {/* Floating Trending Badge */}
      <div className="custom-trending-product-floating-badge">
        <TrendingUp className="custom-trending-product-floating-badge-icon" size={16} />
        <span className="custom-trending-product-floating-badge-text">#{id} Trending</span>
      </div>

      <div className="custom-trending-product-card-inner">
        {/* Image Section */}
        <div className="custom-trending-product-img-wrapper">
          <img 
            src={mainImage} 
            alt={name}
            className="custom-trending-product-main-img"
          />
          <img 
            src={hoverImage} 
            alt={name}
            className="custom-trending-product-hover-img"
          />

          {/* Badge */}
          <div className="custom-trending-product-trending-badge">
            <Zap size={14} />
            {badge}
          </div>

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="custom-trending-product-stock-badge">
              {discount}% OFF
            </div>
          )}

          {/* Quick Action Icons */}
          <div className="custom-trending-product-quick-icons">
            <button 
              className={`custom-trending-product-icon-btn ${isWishlisted ? 'active' : ''}`}
              onClick={() => setIsWishlisted(!isWishlisted)}
              aria-label="Add to wishlist"
            >
              <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
            </button>
            <button 
              className="custom-trending-product-icon-btn"
              aria-label="Quick view"
            >
              <Zap size={20} />
            </button>
            <button 
              className="custom-trending-product-icon-btn"
              aria-label="Share"
            >
              <Share2 size={20} />
            </button>
          </div>

          {/* Timer Progress Bar */}
          <div className="custom-trending-product-timer-bar">
            <div className="custom-trending-product-timer-progress"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="custom-trending-product-content">
          {/* Header with Category and Reviews */}
          <div className="custom-trending-product-header">
            <div className="custom-trending-product-category">
              <TrendingUp size={12} />
              {category}
            </div>
            <div className="custom-trending-product-timer">
              <div className="custom-trending-product-rating-display">
                <Star size={14} fill="#FFB800" color="#FFB800" />
                <span className="custom-trending-product-rating-value">{rating}</span>
              </div>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="custom-trending-product-name">{name}</h3>

          {/* Stats */}
          <div className="custom-trending-product-stats">
            <div className="custom-trending-product-stat">
              <Star className="custom-trending-product-stat-icon" size={18} />
              <span className="custom-trending-product-stat-text">
                <span className="custom-trending-product-stat-value">{reviews}</span> reviews
              </span>
            </div>
            <div className="custom-trending-product-stat">
              <Zap className="custom-trending-product-stat-icon" size={18} />
              <span className="custom-trending-product-stat-text">
                <span className="custom-trending-product-stat-value">Fast</span> shipping
              </span>
            </div>
          </div>

          {/* Color Swatches */}
          {colors.length > 0 && (
            <div className="custom-trending-product-colors">
              <label className="custom-trending-product-color-label">Colors:</label>
              <div className="custom-trending-product-color-swatches">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="custom-trending-product-color-swatch"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Price Section */}
          <div className="custom-trending-product-price-section">
            <div className="custom-trending-product-prices">
              <div className="custom-trending-product-price">&#8377;{price}</div>
              <div className="custom-trending-product-price-details">
                <span className="custom-trending-product-original-price">&#8377;{originalPrice}</span>
                {discount > 0 && (
                  <span className="custom-trending-product-discount">
                    {discount}% OFF
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="custom-trending-product-add-to-cart">
            <ShoppingCart size={22} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingProductCard;