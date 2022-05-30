import styled from '@emotion/styled';
import { colors } from '../../../styles';

export const MenuItem = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  color: ${colors.primary_gray.variant_three};

  @media (min-width: 600px) {
    font-size: 1.2rem;
  }
`;
