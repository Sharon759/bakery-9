import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  background: #fff;
  padding: 4.5rem 1rem 2.5rem 1rem;
  @media (max-width: 700px) {
    padding: 2.5rem 0.5rem 1.5rem 0.5rem;
  }
`;
const Heading = styled.h2`
  font-family: 'DM Serif Display', 'Playfair Display', serif;
  font-size: 2.3rem;
  color: #b08d57;
  font-weight: 700;
  text-align: left;
  margin: 0 0 2.2rem 0;
  letter-spacing: 0.01em;
  @media (max-width: 700px) {
    font-size: 1.3rem;
    text-align: center;
  }
`;
const ProductRow = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  gap: 2.5rem;
  max-width: 950px;
  margin: 0 auto;
  border-bottom: 1.5px solid #ece7df;
  padding-bottom: 2.2rem;
  @media (max-width: 900px) {
    gap: 1.2rem;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: none;
    padding-bottom: 0;
  }
`;
const Product = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background: none;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;
const Img = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(176,141,87,0.10);
  @media (max-width: 700px) {
    width: 60px;
    height: 60px;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Name = styled.h4`
  color: #7c5e3c;
  font-size: 1.08rem;
  margin: 0 0 0.2rem 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;
const Price = styled.div`
  color: #b08d57;
  font-size: 1.05rem;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
`;

const products = [
  {
    name: 'Chocolate Covered Cookie-wich',
    img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=300&q=80',
    price: '$6.99',
  },
  {
    name: 'Ice Cream Deluxe Cookie',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80',
    price: '$10.75',
  },
  {
    name: 'Ham Baguette Sandwich',
    img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=300&q=80',
    price: '$18.50',
  },
  {
    name: 'Ham & Swiss Croissant',
    img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=300&q=80',
    price: '$8.99',
  },
];

export default function BestsellersSection() {
  return (
    <Section id="bestsellers">
      <Heading>New Bestsellers</Heading>
      <ProductRow
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {products.map((p, i) => (
          <Product
            key={p.name}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <Img src={p.img} alt={p.name} />
            <Info>
              <Name>{p.name}</Name>
              <Price>{p.price}</Price>
            </Info>
          </Product>
        ))}
      </ProductRow>
    </Section>
  );
}
