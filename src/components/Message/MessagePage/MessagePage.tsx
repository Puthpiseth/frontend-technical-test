import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import arrowLeft from '../../../assets/arrow-left.svg';
import { addMessage, MessageState, resetMessage } from '../../../state/message';
import { ConversationState, resetUserName } from '../../../state/user';
import { Message } from '../../../types/message';
import { convertTimeStampToDateTime } from '../../../utils/dates';
import { BlackText, Medium } from '../../UIElements';
import { ChatBubble } from '../ChatBubble';
import MessageForm from '../MessageForm/MessageForm';
import { ArrowLeft, Banner, MessageBody, MessageContainer, MessageHeader } from './MessagePage.style';

interface MessageProps {
  userId: number;
}
const MessagePage = ({ userId }: MessageProps) => {
  const recipientName = useSelector((state: ConversationState) => state['user'].recipientName);
  const messages = useSelector((state: MessageState) => state['message']).messages;
  const dispatch = useDispatch();
  const router = useRouter();
  const [messageInProgress, setMessageInProgess] = useState<string>('');
  const { conversationId } = router.query;

  useEffect(() => {
    // Reset a username to initial state while clicking a user
    dispatch(resetUserName());
    // Reset a message to initial state and prevent duplicating messages while clicking a user
    dispatch(resetMessage());
  }, [dispatch]);

  const handleWriteMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: set a debounce delay, 200ms?
    setMessageInProgess(e.target.value);
  };

  const handleAddMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const messageId = messages && messages.length ? messages[messages.length - 1].id + 1 : 0;
    const message: Message = {
      id: messageId,
      conversationId: Number(conversationId),
      body: messageInProgress,
      authorId: userId,
      timestamp: Date.now() / 1000,
    };
    dispatch(addMessage(message));
  };

  return (
    <MessageContainer>
      <MessageHeader>
        <Link href="/">
          <ArrowLeft>
            <Image src={arrowLeft} width={15} height={15} alt="back arrow icon" data-test="arrow-back"></Image>
          </ArrowLeft>
        </Link>
        {recipientName && (
          <Banner>
            <BlackText>Conversation avec {recipientName}</BlackText>
          </Banner>
        )}
      </MessageHeader>
      <MessageBody>
        {messages && messages.length ? (
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
