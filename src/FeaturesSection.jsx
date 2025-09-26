import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLeaf, FaFireAlt, FaBoxOpen } from 'react-icons/fa';

const Section = styled.section`
  background: #fff;
  padding: 4rem 2rem;
  position: relative;
`;
const FeaturesRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
const Feature = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 2rem 1.5rem;
  position: relative;
  @media (max-width: 900px) {
    padding: 1.5rem 1rem;
  }
`;
const Divider = styled.div`
  width: 1px;
  height: 60px;
  background: #e0d7c7;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 900px) {
    display: none;
  }
`;
const Icon = styled.div`
  font-size: 2.5rem;
  color: #b08d57;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h3`
  font-size: 1.2rem;
  color: #6b6e58;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-align: center;
`;
const Desc = styled.p`
  font-size: 1rem;
  color: #7c5e3c;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
  max-width: 250px;
`;

const features = [
  { 
    icon: <FaLeaf />, 
    title: 'Nutrient-rich', 
    desc: 'Nutrition-rich delights, crafted to nourish your taste buds.' 
  },
  { 
    icon: <FaFireAlt />, 
    title: '100% Baked', 
    desc: 'Savouring 100% baked items from our oven to your plate.' 
  },
  { 
    icon: <FaBoxOpen />, 
    title: 'Secure Packaging', 
    desc: 'Enjoy peace of mind with our secure packaging.' 
  },
];

export default function FeaturesSection() {
  return (
    <Section>
      <FeaturesRow
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {features.map((f, i) => (
          <Feature
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Icon>{f.icon}</Icon>
            <Title>{f.title}</Title>
            <Desc>{f.desc}</Desc>
            {i < features.length - 1 && <Divider />}
          </Feature>
        ))}
      </FeaturesRow>
    </Section>
  );
}
