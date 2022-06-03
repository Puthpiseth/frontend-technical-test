import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { findConversationsByUserId } from '../../api';
import { Conversation } from '../../types/conversation';
import { convertTimeStampToDate } from '../../utils/dates';
import { Layout } from '../Layout';
import { ConversationBarList } from '../UIElements';
import UserListItem from '../User/UserListItem';

const ConversationsList = () => {
  const router = useRouter();
  const pathname = router.asPath.split('?')[0];
  const { recipientId } = router.query;
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    const fetConversations = async () => {
      const conversationsList = await findConversationsByUserId(recipientId as string);
      setConversations(conversationsList.data);
    };
    fetConversations();
  }, [recipientId]);

  const navigateToMessage = (conversationId: number) => () => {
    router.push({ pathname, query: { conversationId } });
  };

  return (
    <>
      <Layout>
        <ConversationBarList>
          {conversations.map((conversation) => (
            <UserListItem
              userNickname={conversation.recipientNickname}
              timestamp={convertTimeStampToDate(conversation.lastMessageTimestamp)}
              key={conversation.id}
              onClick={navigateToMessage(conversation.id)}
            />
          ))}
        </ConversationBarList>
      </Layout>
    </>
  );
};

export default ConversationsList;
