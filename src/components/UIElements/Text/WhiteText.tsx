import styled from '@emotion/styled';
import { colors } from '../../../styles';

export const WhiteText = styled.p`
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5em;
  color: ${colors.white};
  margin: 0;

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;
