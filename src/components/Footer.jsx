import React, { useState } from "react";
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from "react-icons/fi";
import { IoLocationOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";
import { RiPinterestLine } from "react-icons/ri";

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Subscribed:', email);
        setEmail('');
    };

    return (
        <>
            <footer className="custom-footer-section">
                {/* Newsletter Section */}
                <div className="custom-footer-newsletter">
                    <h3 className="custom-footer-newsletter-title">Stay In Style</h3>
                    <p className="custom-footer-newsletter-subtitle">
                        Subscribe to get exclusive access to new arrivals, sales & fashion tips
                    </p>
                    <div className="custom-footer-newsletter-wrapper">
                        <input
                            type="email"
                            className="custom-footer-newsletter-input"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            onClick={handleSubscribe}
                            className="custom-footer-newsletter-btn"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="custom-footer-container">
                    {/* Brand Column */}
                    <div className="custom-footer-brand-col">
                        <h2 className="custom-footer-logo">ShineAura</h2>
                        <p className="custom-footer-tagline">
                            Elevating your wardrobe with timeless elegance and contemporary style.
                            Where luxury meets everyday fashion.
                        </p>
                        <div className="custom-footer-socials">
                            <a href="#" className="custom-footer-social-link" aria-label="Instagram">
                                <FiInstagram />
                            </a>
                            <a href="#" className="custom-footer-social-link" aria-label="Pinterest">
                                <RiPinterestLine />
                            </a>
                            <a href="#" className="custom-footer-social-link" aria-label="Facebook">
                                <FiFacebook />
                            </a>
                            <a href="#" className="custom-footer-social-link" aria-label="YouTube">
                                <FiYoutube />
                            </a>
                            <a href="#" className="custom-footer-social-link" aria-label="Twitter">
                                <FiTwitter />
                            </a>
                        </div>

                        {/* Payment Methods */}
                        <div className="custom-footer-payment-methods">
                            <span className="custom-footer-payment-label">We Accept</span>
                            <div className="custom-footer-payment-icons">
                                <div className="custom-footer-payment-icon">VISA</div>
                                <div className="custom-footer-payment-icon">MC</div>
                                <div className="custom-footer-payment-icon">AMEX</div>
                                <div className="custom-footer-payment-icon">PAY</div>
                            </div>
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div className="custom-footer-links-col">
                        <h4 className="custom-footer-heading">Shop</h4>
                        <ul className="custom-footer-links">
                            <li><a href="/new-arrivals" className="custom-footer-link">New Arrivals</a></li>
                            <li><a href="/collections" className="custom-footer-link">Collections</a></li>
                            <li><a href="/trending" className="custom-footer-link">Trending</a></li>
                            <li><a href="/sale" className="custom-footer-link">Sale</a></li>
                            <li><a href="/lookbook" className="custom-footer-link">Lookbook</a></li>
                        </ul>
                    </div>

                    {/* Help Links */}
                    <div className="custom-footer-links-col">
                        <h4 className="custom-footer-heading">Help</h4>
                        <ul className="custom-footer-links">
                            <li><a href="/contact" className="custom-footer-link">Contact Us</a></li>
                            <li><a href="/shipping" className="custom-footer-link">Shipping Info</a></li>
                            <li><a href="/returns" className="custom-footer-link">Returns</a></li>
                            <li><a href="/faq" className="custom-footer-link">FAQ</a></li>
                            <li><a href="/size-guide" className="custom-footer-link">Size Guide</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="custom-footer-contact-col">
                        <h4 className="custom-footer-heading">Get In Touch</h4>
                        <ul className="custom-footer-contact-info">
                            <li className="custom-footer-contact-item">
                                <IoLocationOutline className="custom-footer-contact-icon" />
                                <span>123 Fashion Avenue, Style District, NY 10001</span>
                            </li>
                            <li className="custom-footer-contact-item">
                                <IoMailOutline className="custom-footer-contact-icon" />
                                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    hello@shineaura.com
                                </a>
                            </li>
                            <li className="custom-footer-contact-item">
                                <IoCallOutline className="custom-footer-contact-icon" />
                                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    +1 (555) 123-4567
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="custom-footer-divider"></div>

                {/* Copyright */}
                <div className="custom-footer-copyright">
                    <p className="custom-footer-copyright-text">© {new Date().getFullYear()} ShineAura. All rights reserved.</p>
                    <div className="custom-footer-legal">
                        <a href="/privacy" className="custom-footer-legal-link">Privacy Policy</a>
                        <a href="/terms" className="custom-footer-legal-link">Terms of Service</a>
                        <a href="/cookies" className="custom-footer-legal-link">Cookie Policy</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;