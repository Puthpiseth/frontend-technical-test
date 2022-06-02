import { Conversation } from '../../types/conversation';
import { convertTimeStampToDate } from '../../utils/dates';

import { getLoggedUserId } from '../../utils/getLoggedUserId';
import { Small, UserAvatar, UserInfoDiv, WhiteBarList } from '../UIElements';

const ConversationListItems = (conversation: Conversation) => {
  return (
    <WhiteBarList>
      <UserAvatar {...conversation} />
      <UserInfoDiv>
        {conversation.senderId === getLoggedUserId() ? conversation.recipientNickname : conversation.senderNickname}
        <Small>{convertTimeStampToDate(conversation.lastMessageTimestamp)}</Small>
      </UserInfoDiv>
    </WhiteBarList>
  );
};

export default ConversationListItems;
