import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import { Conversation } from '../../../types/conversation';

export const UserAvatar = (conversation: Conversation) => {
  return <AvatarDiv>{conversation.recipientNickname[0]}</AvatarDiv>;
};

const AvatarDiv = styled.div`
  font-family: Work-San;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primary_gray.variant_two};
  border: 2px solid ${colors.primary_gray.variant_four};
  color: ${colors.primary_orange};
  border-radius: 50%;
  height: 5vh;
  width: 5vh;
`;
