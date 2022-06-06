import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

export const Medium = styled.p`
  width: 70%;
  font-size: 0.9em;
  font-weight: 300;
  text-align: center;
  line-height: 1.2rem;
  color: ${colors.black};
  margin: 0 auto;

  @media (min-width: 1200px) {
    font-size: 1.1rem;
  }
`;
