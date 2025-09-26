import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  position: relative;
  background: #f8f5f2;
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
const ArtisticText = styled(motion.div)`
  font-family: 'Playfair Display', serif;
  font-size: 2.1rem;
  color: #ece7df;
  line-height: 1.1;
  font-weight: 500;
  margin-bottom: 2.5rem;
  text-align: left;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  span {
    color: #b08d57;
    font-size: 2.5rem;
    font-weight: 700;
    display: inline-block;
    margin: 0 0.2em;
  }
  .highlight {
    color: #7c5e3c;
    font-size: 2.7rem;
    font-weight: 700;
    display: inline-block;
    margin: 0 0.2em;
  }
  @media (max-width: 700px) {
    font-size: 1.1rem;
    span, .highlight { font-size: 1.3rem; }
  }
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: flex-start;
  align-items: flex-end;
  max-width: 900px;
  margin: 0 auto;
`;
const ImgBox = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  margin-right: 1.5rem;
`;
const BoxBg = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 120px;
  height: 90px;
  background: #f8d9a0;
  border-radius: 1.2rem;
  z-index: 1;
`;
const Img = styled(motion.img)`
  position: absolute;
  left: 30px;
  bottom: 10px;
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 1.2rem;
  z-index: 2;
  box-shadow: 0 4px 16px rgba(176,141,87,0.10);
`;
const Img2 = styled(motion.img)`
  width: 120px;
  height: 160px;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 4px 16px rgba(176,141,87,0.10);
`;

export default function SignatureSection() {
  return (
    <Section id="signature">
      <SvgCurve viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,60 Q720,0 1440,60 V0 H0 V60 Z" fill="#fff" />
      </SvgCurve>
      <ArtisticText
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        .Classic cookies <br />
        <span>Cookie’wich</span> <br />
        <span className="highlight">Fresh breadie rolls</span> <br />
        Savory snacks <br />
        English muffins
      </ArtisticText>
      <Flex>
        <ImgBox>
          <BoxBg />
          <Img
            src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=300&q=80"
            alt="Signature Cookie"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </ImgBox>
        <Img2
          src="https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=300&q=80"
          alt="Signature Bread"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </Flex>
    </Section>
  );
}
