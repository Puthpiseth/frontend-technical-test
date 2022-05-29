import styled from '@emotion/styled';
import Image from 'next/image';
import PatrickAvatar from '../../../assets/patrick.svg';

export const UserAvatar = () => {
  return (
    <AvatarDiv>
      <Image src={PatrickAvatar} alt="patrick avatar"></Image>
    </AvatarDiv>
  );
};

const AvatarDiv = styled.div`
  border-radius: 50%;
  height: 5vh;
  width: 5vh;
`;
