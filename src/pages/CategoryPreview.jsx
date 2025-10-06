import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CategoryPreview = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const categories = [
        {
            id: 1,
            name: "New Arrivals",
            subtitle: "Fresh Styles",
            img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop",
            color: "#FF6B9D"
        },
        {
            id: 2,
            name: "Premium Denim",
            subtitle: "Crafted Perfection",
            img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
            color: "#4A90E2"
        },
        {
            id: 3,
            name: "Evening Wear",
            subtitle: "Timeless Elegance",
            img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
            color: "#2D2D2D"
        },
        {
            id: 4,
            name: "Street Style",
            subtitle: "Urban Edge",
            img: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600&h=800&fit=crop",
            color: "#F4A261"
        },
        {
            id: 5,
            name: "Accessories",
            subtitle: "Complete Look",
            img: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=600&h=800&fit=crop",
            color: "#E63946"
        }
    ];

    return (
        <>

            <section className="custom-category-preview-section">
                <div className="container">
                    {/* Header */}
                    <div className="custom-category-preview-header">
                        <div className="custom-category-preview-subtitle">
                            <Sparkles size={16} />
                            <span>Curated Collections</span>
                        </div>
                        <h2 className="custom-category-preview-title">
                            Discover Your <span>Style</span>
                        </h2>
                        <p className="custom-category-preview-description">
                            From timeless classics to contemporary trends, explore our handpicked collections designed for the modern fashion enthusiast.
                        </p>
                    </div>

                    {/* Categories Grid */}
                    <div className="custom-category-preview-grid">
                        {categories.map((category, index) => (
                            <div
                                key={category.id}
                                className="custom-category-preview-card"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="custom-category-preview-card-img-wrapper">
                                    <img
                                        src={category.img}
                                        alt={category.name}
                                        className="custom-category-preview-card-img"
                                    />
                                    <div className="custom-category-preview-card-overlay"></div>
                                </div>

                                <div className="custom-category-preview-card-accent">
                                    <Sparkles size={24} />
                                </div>

                                <div className="custom-category-preview-card-content">
                                    <div className="custom-category-preview-card-subtitle">
                                        {category.subtitle}
                                    </div>
                                    <h3 className="custom-category-preview-card-title">
                                        {category.name}
                                    </h3>
                                    <div className="custom-category-preview-card-action">
                                        <span>Explore Collection</span>
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="custom-category-preview-bottom-cta">
                        <button className="custom-category-preview-cta-btn">
                            <span>View All Collections</span>
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CategoryPreview;