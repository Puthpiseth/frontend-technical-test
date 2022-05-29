import styled from '@emotion/styled';
import Image from 'next/image';
import SendMessage from '../../../assets/send.svg';

export const InputIcon = () => {
  return (
    <InputDiv>
      <Image src={SendMessage} alt="send message icon"></Image>
    </InputDiv>
  );
};

const InputDiv = styled.div`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;
