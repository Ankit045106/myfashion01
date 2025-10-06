import React from 'react';
import Hero from './Hero'
import CategoryPreview from './CategoryPreview'
import BestSeller from './BestSeller';
import CTABanner from './CTABanner';
import TrendingProducts from './TrendingProducts';
import CTABanner02 from './CTABanner02';
import ReviewPreview from './ReviewPreview';

const Home = () => {
  return (
    <section className='custom-home-section'>
      <Hero />
      <CategoryPreview />
      <BestSeller />
      <CTABanner />
      <TrendingProducts />
      <CTABanner02 />
      <ReviewPreview />
    </section>
  )
}

export default Home
