import React from 'react';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import FeatureShowcase from '../components/FeatureShowcase';
import ProductComparison from '../components/ProductComparison';
import NewsletterSignup from '../components/NewsletterSignup';
import ScrollProgress from '../components/ScrollProgress';

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <FeatureShowcase />
      <ProductSection />
      <ProductComparison />
      <NewsletterSignup />
    </>
  );
}