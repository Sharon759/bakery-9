import React from 'react';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import ScrollTransition from './ScrollTransition';
import FeaturesSection from './FeaturesSection';
import BestsellersSection from './BestsellersSection';
import SignatureSection from './SignatureSection';
import AboutSection from './AboutSection';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ScrollTransition />
      <FeaturesSection />
      <BestsellersSection />
      <SignatureSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
