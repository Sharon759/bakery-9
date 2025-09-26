import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  position: relative;
  background: #fff7ed;
  padding: 4.5rem 1rem 2.5rem 1rem;
  margin-top: -60px;
  z-index: 1;
  @media (max-width: 700px) {
    padding: 2.5rem 0.5rem 1.5rem 0.5rem;
    margin-top: -30px;
  }
`;
const SvgCurve = styled.svg`
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 2;
  @media (max-width: 700px) {
    height: 30px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  max-width: 900px;
  margin: 0 auto;
`;
const MapImg = styled(motion.img)`
  width: 220px;
  height: 160px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(176,141,87,0.08);
`;
const BakeryImg = styled(motion.img)`
  width: 160px;
  height: 120px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(176,141,87,0.08);
`;
const Text = styled(motion.div)`
  max-width: 400px;
  color: #7c5e3c;
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: 'Montserrat', sans-serif;
`;
const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #b08d57;
  margin-bottom: 1rem;
`;

export default function AboutSection() {
  return (
    <Section id="about">
      <SvgCurve viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,60 Q720,0 1440,60 V0 H0 V60 Z" fill="#f8f5f2" />
      </SvgCurve>
      <Content>
        <MapImg
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          alt="Map"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <Text
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Title>European taste since 1884</Title>
          Baker's Bite brings the finest European bakery traditions to your table. Our recipes have been passed down for generations, ensuring every bite is a taste of history and passion. <br /><br />
          Visit us or order online for a sweet journey!
        </Text>
        <BakeryImg
          src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=300&q=80"
          alt="Bakery"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </Content>
    </Section>
  );
}
