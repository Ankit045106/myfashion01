// import React, { useState } from 'react';
// import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';

// const ProductCard = ({product}) => {
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleImageChange = (index) => {
//     setCurrentImageIndex(index);
//   };

//   return (
//     <>

//       <div className="custom-product-card-section">
//         {/* Image Container */}
//         <div className="custom-product-card-img-container">
//           <img 
//             src={product.images[currentImageIndex]} 
//             alt={product.name}
//             className="custom-product-card-img"
//           />
          
//           {/* Overlay */}
//           <div className="custom-product-card-overlay"></div>

//           {/* Badge */}
//           <div className="custom-product-card-badge">{product.badge}</div>

//           {/* Discount Badge */}
//           <div className="custom-product-card-discount-badge">
//             -{product.discount}%
//           </div>

//           {/* Quick Actions */}
//           <div className="custom-product-card-quick-actions">
//             <button className="custom-product-card-action-btn" aria-label="Quick view">
//               <Eye size={20} />
//             </button>
//             <button className="custom-product-card-action-btn" aria-label="Add to cart">
//               <ShoppingBag size={20} />
//             </button>
//           </div>

//           {/* Wishlist Button */}
//           <button 
//             className={`custom-product-card-wishlist-btn ${isWishlisted ? 'active' : ''}`}
//             onClick={() => setIsWishlisted(!isWishlisted)}
//             aria-label="Add to wishlist"
//           >
//             <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
//           </button>

//           {/* Image Navigation Dots */}
//           <div className="custom-product-card-image-dots">
//             {product.images.map((_, index) => (
//               <div 
//                 key={index}
//                 className={`custom-product-card-image-dot ${currentImageIndex === index ? 'active' : ''}`}
//                 onClick={() => handleImageChange(index)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Card Body */}
//         <div className="custom-product-card-body">
//           {/* Category */}
//           <div className="custom-product-card-category">{product.category}</div>

//           {/* Product Name */}
//           <h3 className="custom-product-card-name">{product.name}</h3>

//           {/* Rating */}
//           <div className="custom-product-card-rating">
//             <div className="custom-product-card-stars">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} size={16} />
//               ))}
//             </div>
//             <span className="custom-product-card-rating-text">
//               {product.rating} ({product.reviews})
//             </span>
//           </div>

//           {/* Color Options */}
//           <div className="custom-product-card-colors">
//             <span className="custom-product-card-color-label">Colors:</span>
//             <div className="custom-product-card-color-swatches">
//               {product.colors.map((color, index) => (
//                 <div
//                   key={index}
//                   className={`custom-product-card-color-swatch ${index === 0 ? 'active' : ''}`}
//                   style={{ backgroundColor: color }}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Price Section */}
//           <div className="custom-product-card-price-section">
//             <div className="custom-product-card-prices">
//               <span className="custom-product-card-price">&#8377;{product.price}</span>
//               <span className="custom-product-card-original-price">&#8377;{product.originalPrice}</span>
//             </div>
//             <div className="custom-product-card-save-badge">
//               Save ${product.originalPrice - product.price}
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="custom-product-card-actions">
//             <button className="custom-product-card-btn custom-product-card-btn-primary">
//               <ShoppingBag size={18} />
//               Add to Bag
//             </button>
//             <button className="custom-product-card-btn custom-product-card-btn-secondary">
//               <Eye size={18} />
//               View
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductCard;


import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  // ✅ Safe access (avoid crash if product or fields are missing)
  const images = Array.isArray(product?.images) ? product.images : [];
  const colors = Array.isArray(product?.colors) ? product.colors : [];

  // ✅ Provide fallback image (optional)
  const imageSrc =
    images.length > 0
      ? images[currentImageIndex]
      : 'https://via.placeholder.com/300x300?text=No+Image';

  return (
    <div className="custom-product-card-section">
      {/* Image Container */}
      <div className="custom-product-card-img-container">
        <img
          src={imageSrc}
          alt={product?.name || 'Product'}
          className="custom-product-card-img"
        />

        <div className="custom-product-card-overlay"></div>

        {product?.badge && (
          <div className="custom-product-card-badge">{product.badge}</div>
        )}

        {product?.discount && (
          <div className="custom-product-card-discount-badge">
            -{product.discount}%
          </div>
        )}

        {/* Quick Actions */}
        <div className="custom-product-card-quick-actions">
          <button className="custom-product-card-action-btn" aria-label="Quick view">
            <Eye size={20} />
          </button>
          <button className="custom-product-card-action-btn" aria-label="Add to cart">
            <ShoppingBag size={20} />
          </button>
        </div>

        {/* Wishlist Button */}
        <button
          className={`custom-product-card-wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label="Add to wishlist"
        >
          <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>

        {/* Image Navigation Dots */}
        {images.length > 0 && (
          <div className="custom-product-card-image-dots">
            {images.map((_, index) => (
              <div
                key={index}
                className={`custom-product-card-image-dot ${
                  currentImageIndex === index ? 'active' : ''
                }`}
                onClick={() => handleImageChange(index)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="custom-product-card-body">
        <div className="custom-product-card-category">
          {product?.category || 'Category'}
        </div>

        <h3 className="custom-product-card-name">
          {product?.name || 'Product Name'}
        </h3>

        {/* Rating */}
        <div className="custom-product-card-rating">
          <div className="custom-product-card-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} />
            ))}
          </div>
          <span className="custom-product-card-rating-text">
            {product?.rating ?? 0} ({product?.reviews ?? 0})
          </span>
        </div>

        {/* Colors */}
        {colors.length > 0 && (
          <div className="custom-product-card-colors">
            <span className="custom-product-card-color-label">Colors:</span>
            <div className="custom-product-card-color-swatches">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`custom-product-card-color-swatch ${
                    index === 0 ? 'active' : ''
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Price Section */}
        <div className="custom-product-card-price-section">
          <div className="custom-product-card-prices">
            <span className="custom-product-card-price">
              ₹{product?.price ?? 0}
            </span>
            <span className="custom-product-card-original-price">
              ₹{product?.originalPrice ?? 0}
            </span>
          </div>
          <div className="custom-product-card-save-badge">
            Save ₹
            {(product?.originalPrice ?? 0) - (product?.price ?? 0)}
          </div>
        </div>

        {/* Buttons */}
        <div className="custom-product-card-actions">
          <button className="custom-product-card-btn custom-product-card-btn-primary">
            <ShoppingBag size={18} />
            Add to Bag
          </button>
          <button className="custom-product-card-btn custom-product-card-btn-secondary">
            <Eye size={18} />
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
