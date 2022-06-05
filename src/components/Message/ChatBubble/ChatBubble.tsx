import styled from '@emotion/styled';
import { ChatBubbleBox } from '../ChatBubble/ChatBubble.style';

export interface ChatBubbleProps {
  content: string;
  fromUser: boolean;
  timestamp: string;
  username: string;
}
export interface ChatBubbleWrapperProps {
  fromUser: boolean;
}

const ChatBubbleWrapper = styled.div<ChatBubbleWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.fromUser ? 'flex-end' : 'flex-start')};
  justify-content: center;
  gap: 1rem;
`;

export const ChatBubble = ({ content, fromUser, timestamp, username }: ChatBubbleProps) => {
  return (
    <ChatBubbleWrapper fromUser={fromUser}>
      <span>{username}</span>
      <ChatBubbleBox>{content}</ChatBubbleBox>
      <span>{timestamp}</span>
    </ChatBubbleWrapper>
  );
};

export default ChatBubble;
