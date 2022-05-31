import styled from '@emotion/styled';
import { Medium } from '../Text/Medium';
import { Small } from '../Text/Small';
// import { colors } from '../../../styles/colors';
import { UserAvatar } from './UserAvatar';

interface UserComponentProps {
  text: string;
  date: string;
}

export const UserComponent = ({ text, date }: UserComponentProps) => {
  return (
    <>
      <UserAvatar />
      <UserInfoDiv>
        <Medium>{text}</Medium>
        <Small>{date}</Small>
      </UserInfoDiv>
    </>
  );
};

const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 1rem;
  gap: 6px;
`;
