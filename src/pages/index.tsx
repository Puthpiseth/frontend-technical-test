import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import { findConversations } from '../api';
import click from '../assets/click.json';
import ConversationListItems from '../components/Conversation/ConversationListItems';
import { Layout } from '../components/Layout';
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
      <Layout>
        <ConversationContainer>
          <Lottie
            loop
            animationData={click}
            play
            style={{ width: 250, height: 250 }}
            role="presentation"
            aria-label="An animation svg of a beautiful lady sitting and clicking a screen"
          />
          <Medium>
            Please click on a conversation👇 or on Message 👆 <br />
            to start your discussion.
          </Medium>
        </ConversationContainer>
        {conversations.map((conversation) => (
          <Link key={conversation.id} href={`/conversations/${conversation.id}`}>
            <ConversationListItems {...conversation} />
          </Link>
        ))}
      </Layout>
    </>
  );
};

export default HomePage;
