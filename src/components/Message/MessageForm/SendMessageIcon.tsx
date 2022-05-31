import styled from '@emotion/styled';
import Image from 'next/image';
import SendMessage from '../../../assets/send.svg';

export const SendMessageIcon = () => {
  return (
    <IconDiv>
      <Image src={SendMessage} alt="send message icon"></Image>
    </IconDiv>
  );
};

const IconDiv = styled.div`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;
