import Head from 'next/head';
import { useRouter } from 'next/router';
import { ConversationLayout, ConversationMobileLayout } from '../../components/Conversation/ConversationList.style';
import ConversationPageMobile from '../../components/Conversation/ConversationPageMobile';
import ConversationsList from '../../components/Conversation/ConversationsList';
import { Layout } from '../../components/Layout';
import MessagePage from '../../components/Message/MessagePage/MessagePage';
import useWindowSize from '../../hooks/useWindowSize';

const ConversationPage = () => {
  const size = useWindowSize();
  const router = useRouter();
  const { userId } = router.query;
  return (
    <>
      <Head>
        <title>Message-Page</title>
        <meta name="description" content="Welcome to the message page"></meta>
      </Head>
      <Layout>
        {size.width && size.width >= 1200 && (
          <ConversationLayout>
            <ConversationsList />
            <MessagePage userId={Number(userId)} />
          </ConversationLayout>
        )}
        {size.width && size.width < 1200 && (
          <ConversationMobileLayout>
            <ConversationPageMobile />
          </ConversationMobileLayout>
        )}
      </Layout>
    </>
  );
};

export default ConversationPage;
