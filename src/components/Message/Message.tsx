import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getConversation } from '../../api';
import { findMessagesByConversationId } from '../../api/message.api';
import arrowLeft from '../../assets/arrow-left.svg';
import { Conversation } from '../../types/conversation';
import { Message } from '../../types/message';
import { Layout } from '../Layout';
import { Medium } from '../UIElements';
import { GrayChatBubble } from '../UIElements/ChatBubble/GrayChatBubble';
import { ArrowLeft, MessageLayoutHeader, MessageLayoutInner } from './MessageContainer';
import { MessageBodyLayout } from './MessageContainer/MessageBodyLayout';
import { MessageLayout } from './MessageContainer/MessageLayout.style';
import MessageForm from './MessageForm/MessageForm';
import { FormInputLayout } from './MessageForm/MessageForm.style';

const Message = () => {
  const router = useRouter();
  const [message, setMessage] = useState<Message>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const { conversationId } = router.query;

  useEffect(() => {
    const findMessages = async () => {
      const fetchMessages = await findMessagesByConversationId(conversationId as string);
      setMessages(fetchMessages.data);
      setConversations(conversations);
    };

    const loadConversation = async () => {
      const conversation = await getConversation(conversationId as string);
      const authorId = conversation.data.recipientId;
      setMessage({ ...message, authorId });
    };
    conversationId && findMessages() && loadConversation();
  }, [conversationId]);

  const handleWriteMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({
      ...message,
      body: e.target.value,
      timestamp: Date.now(),
      id: messages[messages.length - 1].id + 1,
      conversationId: +conversationId,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    message.body && setMessages((messages) => messages.concat(message));
  };

  return (
    <>
      <Head>
        <title>Message-Page</title>
        <meta name="description" content="Welcome to the message page"></meta>
      </Head>
      <Layout>
        <MessageLayout>
          <MessageLayoutInner>
            <MessageLayoutHeader>
              <Link href="/">
                <ArrowLeft>
                  <Image src={arrowLeft} width={15} height={15} alt="back arrow icon"></Image>
                </ArrowLeft>
              </Link>
            </MessageLayoutHeader>
            <MessageBodyLayout>
              {conversationId ? (
                messages.map((message) => <GrayChatBubble key={message.id}>{message.body}</GrayChatBubble>)
              ) : (
                <Medium>👈 You have not had any conversations yet. Let&lsquo;s have a discussion now 🚀</Medium>
              )}
            </MessageBodyLayout>
            <FormInputLayout>
              <MessageForm
                onChange={handleWriteMessage}
                placeholder={'Send Message'}
                type="text"
                onSubmit={handleSubmit}
              />
            </FormInputLayout>
          </MessageLayoutInner>
        </MessageLayout>
      </Layout>
    </>
  );
};

export default Message;
