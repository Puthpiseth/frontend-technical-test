import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

export const ChatBubble = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-shadow: 0px 0px 2px rgba(48, 56, 76, 0.1);
  border-radius: 10px;
  border: 1px solid ${colors.primary_gray.variant_two};
  background: ${colors.primary_gray.variant_two};
  padding: 1rem;
`;
