import { Small } from '../../UIElements';
import { ChatBubbleUsername, ChatBubbleWrapper, GrayChatBubbleBox, OrangeChatBubbleBox } from './ChatBubble.style';

interface ChatBubbleProps {
  content: string;
  isUser: boolean;
  timestamp: string;
  username: string;
}
export interface ChatBubbleWrapperProps {
  isUser: boolean;
}

export const ChatBubble = ({ content, isUser, timestamp, username }: ChatBubbleProps) => {
  return (
    <ChatBubbleWrapper isUser={isUser}>
      <ChatBubbleUsername>{username}</ChatBubbleUsername>
      {isUser ? <OrangeChatBubbleBox>{content}</OrangeChatBubbleBox> : <GrayChatBubbleBox>{content}</GrayChatBubbleBox>}
      <Small>{timestamp}</Small>
    </ChatBubbleWrapper>
  );
};
