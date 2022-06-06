import { useRouter } from 'next/router';
import MessagePage from '../Message/MessagePage/MessagePage';
import { ConversationLayout, ConversationMobileLayout } from './ConversationList.style';
import ConversationsList from './ConversationsList';

const ConverationPageMobile = () => {
  const router = useRouter();
  const { userId } = router.query;
  return (
    <ConversationMobileLayout>
      <ConversationsList />
      <ConversationLayout>
        <MessagePage userId={Number(userId)} />
      </ConversationLayout>
    </ConversationMobileLayout>
  );
};

export default ConverationPageMobile;
