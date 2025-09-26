import React from 'react';
import './App.css';
import Header from './Header.jsx';
import HeroSection from './HeroSection.jsx';
import ScrollTransition from './ScrollTransition.jsx';
import FeaturesSection from './FeaturesSection.jsx';
import BestsellersSection from './BestsellersSection.jsx';
import SignatureSection from './SignatureSection.jsx';
import AboutSection from './AboutSection.jsx';
import Footer from './Footer.jsx';

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
