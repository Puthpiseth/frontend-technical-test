import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

export const ArrowLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  background: ${colors.primary_gray.variant_two};
  box-shadow: 0px 0px 4px rgba(48, 56, 76, 0.1);
  border-radius: 50%;
  border: 1px solid ${colors.primary_gray.regular};
  cursor: pointer;
  &:hover {
    background: ${colors.primary_gray.regular};
  }
`;
