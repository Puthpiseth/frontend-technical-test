import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { findConversationsByUserId } from '../../api';
import { Conversation } from '../../types/conversation';
import { convertTimeStampToDate } from '../../utils/dates';
import UserListItem from '../User/UserListItem';
import { ConversationBarList } from './ConversationList.style';

const ConversationsList = () => {
  const router = useRouter();
  const pathname = router.asPath.split('?')[0];
  const { userId } = router.query;
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    const fetchConversations = async () => {
      const conversationsList = await findConversationsByUserId(userId as string);
      setConversations(conversationsList.data);
    };
    fetchConversations();
  }, [userId]);

  const navigateToMessage = (conversationId: number) => () => {
    router.push({ pathname, query: { conversationId } });
  };

  return (
    <ConversationBarList>
      {conversations.map((conversation, index) => (
        <UserListItem
          userNickname={conversation.recipientNickname}
          timestamp={convertTimeStampToDate(conversation.lastMessageTimestamp)}
          key={index}
          onClick={navigateToMessage(index)}
        />
      ))}
    </ConversationBarList>
  );
};

export default ConversationsList;
