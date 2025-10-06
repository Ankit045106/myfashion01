import React from 'react';
import ctaBanner01 from "../assets/cta-banner/cta-banner-01.jpg"

const CTABanner = () => {
  return (
    <section className="custom-cta-banner-section">
      <div className="custom-cta-banner-img">
        <img src={ctaBanner01} alt="" />
      </div>
      <button className="custom-cta-banner-button">Shop Now</button>
    </section>
  )
}

export default CTABanner
