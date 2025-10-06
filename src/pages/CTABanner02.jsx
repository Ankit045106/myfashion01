import React from 'react';
import ctaBanner01 from "../assets/cta-banner/cta-banner-02.jpg"

const CTABanner02 = () => {
    return (
        <section className="custom-cta-banner-section">
            <div className="custom-cta-banner-img">
                <img src={ctaBanner01} alt="" />
            </div>
            {/* <button className="custom-cta-banner-button">Shop Now</button> */}
        </section>
    )
}

export default CTABanner02
