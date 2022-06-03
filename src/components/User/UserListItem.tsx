import { BlackText, Small, UserAvatar, UserInfoDiv, WhiteBar } from '../UIElements';

interface Props {
  userNickname: string;
  timestamp?: string;
  onClick?: () => void;
}
const UserListItem = ({ userNickname, timestamp, onClick }: Props) => {
  return (
    <WhiteBar onClick={onClick}>
      <UserAvatar userName={userNickname.charAt(0).toUpperCase()} />
      <UserInfoDiv>
        <BlackText>{userNickname}</BlackText>
        <Small>{timestamp}</Small>
      </UserInfoDiv>
    </WhiteBar>
  );
};

export default UserListItem;
