import Head from 'next/head';
import { ConversationLayout } from '../../components/Conversation/ConversationList.style';
import ConversationsList from '../../components/Conversation/ConversationsList';
import Message from '../../components/Message/Message/Message';

const ConversationPage = () => {
  return (
    <>
      <Head>
        <title>Message-Page</title>
        <meta name="description" content="Welcome to the message page"></meta>
      </Head>
      <ConversationLayout>
        <ConversationsList />
        <Message />
      </ConversationLayout>
    </>
  );
};

export default ConversationPage;
