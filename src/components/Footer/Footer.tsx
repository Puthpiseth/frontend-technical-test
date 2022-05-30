import { Medium } from '../UIElements/Text';
import { FooterContainer } from './Footer.style';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <Medium>
        <span>&copy; leboncoin - {year}</span>
      </Medium>
    </FooterContainer>
  );
};
