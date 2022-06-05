import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

export const Medium = styled.p`
  width: 50%;
  font-size: 0.9em;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  line-height: 1.5rem;
  color: ${colors.primary_gray.variant_six};
  margin: 0 auto;

  @media (min-width: 1200px) {
    font-size: 1.1rem;
  }
`;
