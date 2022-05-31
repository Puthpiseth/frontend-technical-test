import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  padding: 1.5rem;
  border-top: 1px solid ${colors.primary_gray.variant_two};
  position: absolute;
  bottom: 0;
`;
