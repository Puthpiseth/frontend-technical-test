import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { findConversationsByUserId } from '../../api';
import { fetchMessages } from '../../state/asyncRequest';
import { resetMessage } from '../../state/message';
import { AppDispatchType } from '../../state/store';
import { getUserName } from '../../state/user';
import { Conversation } from '../../types/conversation';
import { convertTimeStampToDate } from '../../utils/dates';
import UserListItem from '../User/UserListItem';
import { ConversationBarList } from './ConversationList.style';

const ConversationsList = () => {
  const dispatch = useDispatch<AppDispatchType>();
  const router = useRouter();
  const { userId } = router.query;
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    const fetchConversations = async () => {
      const conversationsList = await findConversationsByUserId(userId as string);
      setConversations(conversationsList.data);
      if (conversationsList.data[0]) {
        dispatch(getUserName(conversationsList.data[0].recipientNickname));
        dispatch(fetchMessages(conversationsList.data[0].id));
      }
    };
    fetchConversations();
  }, [dispatch, userId]);

  const handleLoadMessages = (conversationId: number, recipientNickname: string) => () => {
    dispatch(getUserName(recipientNickname));
    dispatch(fetchMessages(conversationId));
    dispatch(resetMessage());
  };

  return (
    <ConversationBarList>
      {conversations.map((conversation, index) => (
        <UserListItem
          userNickname={conversation.recipientNickname}
          timestamp={convertTimeStampToDate(conversation.lastMessageTimestamp)}
          key={index}
          onClick={handleLoadMessages(conversation.id, conversation.recipientNickname)}
        />
      ))}
    </ConversationBarList>
  );
};

export default ConversationsList;
