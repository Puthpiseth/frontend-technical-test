import Head from 'next/head';
import { useRouter } from 'next/router';
import { ConversationLayout } from '../../components/Conversation/ConversationList.style';
import ConversationsList from '../../components/Conversation/ConversationsList';
import MessagePage from '../../components/Message/MessagePage/MessagePage';

const ConversationPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  return (
    <>
      <Head>
        <title>Message-Page</title>
        <meta name="description" content="Welcome to the message page"></meta>
      </Head>
      <ConversationLayout>
        <ConversationsList />
        <MessagePage userId={Number(userId)} />
      </ConversationLayout>
    </>
  );
};

export default ConversationPage;
