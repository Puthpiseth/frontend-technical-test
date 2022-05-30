import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  padding: 1.5rem;
  box-shadow: 0px 2px 2px 3px ${colors.primary_gray.variant_two};
  position: fixed;
  bottom: 0;
`;
