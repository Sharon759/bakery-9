import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const HeroBg = styled.section`
  background: #6b6e58;
  min-height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  overflow: hidden;
`;
const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;
const TextSection = styled.div`
  flex: 1;
  z-index: 3;
`;
const HeroTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  font-weight: 400;
  color: #fff;
  line-height: 1.1;
  letter-spacing: 0.01em;
  margin: 0 0 1.5rem 0;
  text-shadow: 0 4px 24px rgba(0,0,0,0.18);
  @media (max-width: 700px) {
    font-size: 2.5rem;
  }
`;
const HeroSub = styled(motion.p)`
  color: #f8f5f2;
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  margin: 0 0 2rem 0;
  max-width: 500px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.12);
  line-height: 1.6;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;
const HeroBtn = styled(motion.button)`
  background: #fff;
  color: #6b6e58;
  border: none;
  border-radius: 2rem;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transition: all 0.3s;
  &:hover {
    background: #b08d57;
    color: #fff;
    transform: translateY(-2px);
  }
`;
const ImgSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const HeroImg = styled(motion.img)`
  width: 400px;
  max-width: 100%;
  height: auto;
  border-radius: 2rem;
  box-shadow: 0 12px 48px rgba(0,0,0,0.2);
  background: #fff;
  @media (max-width: 700px) {
    width: 280px;
  }
`;
const Badge = styled(motion.div)`
  position: absolute;
  top: -20px;
  right: -20px;
  background: #b08d57;
  color: #fff;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  z-index: 4;
  box-shadow: 0 4px 16px rgba(176,141,87,0.3);
  @media (max-width: 700px) {
    width: 70px;
    height: 70px;
    font-size: 0.7rem;
    top: -10px;
    right: -10px;
  }
`;

// Falling cookies animation
const fall = keyframes`
  0% { transform: translateY(-100px) rotate(0deg) scale(0.5); opacity: 0; }
  10% { opacity: 0.8; }
  100% { transform: translateY(100vh) rotate(360deg) scale(1); opacity: 0.3; }
`;
const FallingCookie = styled.div`
  position: absolute;
  top: -50px;
  left: ${({ x }) => x}%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: #b08d57;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  animation: ${fall} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
  opacity: 0.6;
  box-shadow: 0 2px 8px rgba(176,141,87,0.3);
`;

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

export default function HeroSection() {
  // Generate falling cookies on mount
  const [cookies, setCookies] = useState([]);
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push({
        id: i,
        x: getRandom(5, 95),
        size: getRandom(8, 16),
        duration: getRandom(3, 6),
        delay: getRandom(0, 2),
      });
    }
    setCookies(arr);
  }, []);

  return (
    <HeroBg>
      {/* Falling cookies */}
      <AnimatePresence>
        {cookies.map(c => (
          <FallingCookie
            key={c.id}
            x={c.x}
            size={c.size}
            duration={c.duration}
            delay={c.delay}
          />
        ))}
      </AnimatePresence>
      
      <HeroContent>
        <TextSection>
          <HeroTitle
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            The sweetest<br />
            Haven for<br />
            <span style={{ color: '#b08d57' }}>freshly baked</span>
          </HeroTitle>
          <HeroSub
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A delightful treat that combines the comforting charm of freshly baked cookies with the rich, luxurious and mouthwatering fillings.
          </HeroSub>
          <HeroBtn
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Get more details →
          </HeroBtn>
        </TextSection>
        
        <ImgSection>
          <HeroImg
            src="/cookie.png"
            alt="Bakery Cookie Stack"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <Badge
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            BEST<br />SELLER
          </Badge>
        </ImgSection>
      </HeroContent>
    </HeroBg>
  );
}