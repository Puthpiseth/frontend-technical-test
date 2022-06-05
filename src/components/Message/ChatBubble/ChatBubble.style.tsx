import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import { ChatBubbleWrapperProps } from './ChatBubble';

export const ChatBubbleWrapper = styled.div<ChatBubbleWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  justify-content: center;
  gap: 0.6rem;
`;

export const ChatBubbleUsername = styled.div`
  display: flex;
  align-self: flex-end;
  font-size: 18px;
`;

export const GrayChatBubbleBox = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-shadow: 0px 0px 2px rgba(48, 56, 76, 0.1);
  border-radius: 10px;
  border: 1px solid ${colors.primary_gray.variant_two};
  background: ${colors.primary_gray.variant_two};
  color: ${colors.black};
  padding: 1rem;
`;

export const OrangeChatBubbleBox = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-shadow: 0px 0px 2px rgba(48, 56, 76, 0.1);
  border-radius: 10px;
  border: 1px solid ${colors.primary_gray.variant_two};
  background: ${colors.primary_orange};
  color: ${colors.white};
  padding: 1rem;
`;
