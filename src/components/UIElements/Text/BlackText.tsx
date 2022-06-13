import styled from '@emotion/styled';
import { colors } from '../../../styles';

export const BlackText = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5em;
  color: ${colors.black};
  margin: 0;

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;
