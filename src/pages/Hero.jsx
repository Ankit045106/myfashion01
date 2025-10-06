import React from 'react';
// import heroBanner from "../assets/hero-banner/hero-banner-01.jpg";
import fashionVideo from "../assets/hero-banner/hero-banner-video-02.mp4";

const Hero = () => {
    return (
        <section className='custom-hero-section'>
            {/* <div className="custom-hero-banner-img">
                <img src={heroBanner} alt="" />
            </div> */}


            <video
                width="100%"
                height="100%"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={fashionVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default Hero
