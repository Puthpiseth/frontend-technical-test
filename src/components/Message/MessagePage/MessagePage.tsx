import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { findMessagesByConversationId } from '../../../api/message.api';
import arrowLeft from '../../../assets/arrow-left.svg';
import { Message } from '../../../types/message';
import { convertTimeStampToDateTime } from '../../../utils/dates';
import { Medium } from '../../UIElements';
import { ChatBubble } from '../ChatBubble';
import MessageForm from '../MessageForm/MessageForm';
import { ArrowLeft, MessageBody, MessageContainer, MessageHeader } from './MessagePage.style';

interface MessageProps {
  userId: number;
}
const MessagePage = ({ userId }: MessageProps) => {
  const router = useRouter();
  // TODO: add state management in the future to keep data on refresh
  const [messageInProgress, setMessageInProgess] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const { conversationId } = router.query;

  // Load previous messages from the api backend if any
  useEffect(() => {
    const findMessages = async () => {
      const fetchMessages = await findMessagesByConversationId(conversationId as string);
      if (fetchMessages) {
        setMessages(fetchMessages.data);
      }
    };
    conversationId && findMessages();
  }, [conversationId]);

  const handleWriteMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: set a debounce delay, 200ms?
    setMessageInProgess(e.target.value);
  };

  const handleAddMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const messageId = messages && messages.length ? messages.length : 0;
    const message: Message = {
      id: messageId,
      conversationId: Number(conversationId),
      body: messageInProgress,
      authorId: userId,
      timestamp: Date.now() / 1000,
    };
    setMessages((messages) => {
      if (!messages && !messages.length) {
        return [message];
      }
      return messages.concat(message);
    });
  };

  return (
    <MessageContainer>
      <MessageHeader>
        <Link href="/">
          <ArrowLeft>
            <Image src={arrowLeft} width={15} height={15} alt="back arrow icon"></Image>
          </ArrowLeft>
        </Link>
      </MessageHeader>
      <MessageBody>
        {conversationId && messages && messages.length ? (
          messages.map((message, index) => {
            const isUser = message.authorId === userId;
            const username = isUser ? 'Me' : '';
            return (
              <ChatBubble
                content={message.body}
                isUser={isUser}
                key={index}
                timestamp={convertTimeStampToDateTime(message.timestamp)}
                username={username}
              />
            );
          })
        ) : (
          <Medium>
            You have not had any conversations yet. Please click a user 👈 to start your discussion now 🚀
          </Medium>
        )}
      </MessageBody>
      <MessageForm value={messageInProgress} onChange={handleWriteMessage} onSubmit={handleAddMessage} />
    </MessageContainer>
  );
};

export default MessagePage;
