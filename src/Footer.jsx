import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer`
  width: 100%;
  padding: 1.2rem 0;
  background: #b08d57;
  color: #fff;
  text-align: center;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  font-family: 'Playfair Display', serif;
  margin-top: 2rem;
`;

export default function Footer() {
  return (
    <FooterBar>
      © {new Date().getFullYear()} Bakerville. All rights reserved.
    </FooterBar>
  );
}
