import React from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const TransitionWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 90px;
  margin-bottom: -40px;
  position: relative;
  z-index: 10;
`;
const Circle = styled(motion.div)`
  width: 72px;
  height: 72px;
  background: #fff7ed;
  border-radius: 50%;
  box-shadow: 0 2px 12px rgba(176,141,87,0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2.5px solid #b08d57;
  @media (max-width: 700px) {
    width: 48px;
    height: 48px;
  }
`;
const CookieIcon = styled.img`
  width: 38px;
  height: 38px;
  @media (max-width: 700px) {
    width: 26px;
    height: 26px;
  }
`;

export default function ScrollTransition() {
  // Animate based on scroll position
  const { scrollY } = useViewportScroll();
  // Animate scale and opacity as user scrolls from 0 to 180px
  const scale = useTransform(scrollY, [0, 180], [0.5, 1.15]);
  const opacity = useTransform(scrollY, [0, 120, 220], [0, 1, 0]);

  return (
    <TransitionWrap>
      <Circle style={{ scale, opacity }}>
        <CookieIcon src="/cookie.png" alt="Transition Cookie" />
      </Circle>
    </TransitionWrap>
  );
}
