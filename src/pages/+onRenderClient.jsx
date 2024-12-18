import React from 'react';
import Header from '../../components/Header';
import ServiceSection from '../../components/ServiceSection';
import HeroSection from '../../components/Hero';
import Reviews from '../../components/Reviews';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';

const Page = () => (
  <>
    <Header />
    <HeroSection />
    <ServiceSection />
    <Reviews />
    <ContactSection />
    <Footer />
  </>
);

export { Page };