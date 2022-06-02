import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import { findConversations } from '../api';
import click from '../assets/click.json';
import ConversationListItems from '../components/Conversation/ConversationListItems';
import { ConversationContainer, Medium } from '../components/UIElements';
import { Conversation } from '../types/conversation';
import { getLoggedUserId } from '../utils/getLoggedUserId';

const HomePage = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  const getConversations = async () => {
    const fetchConversation = await findConversations(getLoggedUserId());
    setConversations(fetchConversation.data);
  };

  useEffect(() => {
    getConversations();
  }, []);
  return (
    <>
      <Head>
        <title>Home-Page</title>
        <meta name="description" content="Welcome to the Home Page"></meta>
      </Head>
      <>
        <ConversationContainer>
          <Lottie loop animationData={click} play style={{ width: 250, height: 250 }} />
          <Medium>
            Please click on a conversation to start <br /> your discussion.
          </Medium>
        </ConversationContainer>
        {conversations.map((conversation) => (
          <Link key={conversation.id} href={`/conversations/${conversation.id}`}>
            <ConversationListItems {...conversation} />
          </Link>
        ))}
      </>
    </>
  );
};

export default HomePage;
