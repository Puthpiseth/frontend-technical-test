import styled from '@emotion/styled';
import { colors } from '../../../styles';

export const BlackText = styled.p`
  font-family: Work Sans;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5em;
  color: ${colors.black};
  margin: 0;

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;
