import React, { useState } from "react";
import { Star, Quote } from "lucide-react";

const ReviewPreview = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Isabella Martinez",
      role: "Fashion Blogger",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      rating: 5,
      text: "ShineAura has completely transformed my wardrobe! The quality is exceptional and the styles are always on point. Every piece I've purchased has become a staple in my closet.",
      bgImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=1080&fit=crop"
    },
    {
      id: 2,
      name: "Sophia Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      rating: 5,
      text: "I'm obsessed with their attention to detail! From the packaging to the fabric quality, everything screams luxury. ShineAura is my go-to for statement pieces.",
      bgImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop"
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Style Influencer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      rating: 5,
      text: "The customer service is incredible, and the pieces are investment-worthy. I always get compliments when wearing ShineAura. Absolutely worth every penny!",
      bgImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop"
    }
  ];

  const current = reviews[currentReview];

  return (
    <>
      <section className="custom-review-preview-section">
        {/* Background Image */}
        <div className="custom-review-preview-img">
          <img src={current.bgImage} alt="Background" />
          <div className="custom-review-preview-overlay"></div>
        </div>

        {/* Navigation Arrows */}
        <div className="custom-review-preview-arrows">
          <button
            className="custom-review-preview-arrow"
            onClick={() => setCurrentReview((prev) => prev === 0 ? reviews.length - 1 : prev - 1)}
            aria-label="Previous review"
          >
            ‹
          </button>
          <button
            className="custom-review-preview-arrow"
            onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
            aria-label="Next review"
          >
            ›
          </button>
        </div>

        {/* Content */}
        <div className="custom-review-preview-content">
          <div className="custom-review-preview-content-inner-box">
            {/* Quote Icon */}
            <Quote size={60} className="custom-review-preview-quote-icon" />

            {/* User Image */}
            <div className="custom-review-preview-user-img-wrapper">
              <div className="custom-review-preview-user-review-img">
                <img src={current.image} alt={current.name} />
              </div>
            </div>

            {/* Rating */}
            <div className="custom-review-preview-rating">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={20} className="custom-review-preview-star" />
              ))}
            </div>

            {/* Review Text */}
            <p className="custom-review-preview-text">"{current.text}"</p>

            {/* User Info */}
            <div className="custom-review-preview-user-info">
              <h3 className="custom-review-preview-user-name">{current.name}</h3>
              <p className="custom-review-preview-user-role">{current.role}</p>
            </div>

            {/* Navigation Dots */}
            <div className="custom-review-preview-dots">
              {reviews.map((_, index) => (
                <div
                  key={index}
                  className={`custom-review-preview-dot ${currentReview === index ? 'active' : ''}`}
                  onClick={() => setCurrentReview(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewPreview;