import styled from '@emotion/styled';
import Image from 'next/image';
import Logo from '../../../assets/leboncoin-logo.svg';

export const LogoIcon = () => {
  return (
    <LogoDiv>
      <Image src={Logo} alt="Leboncoin Logo" width={150} height={40}></Image>
    </LogoDiv>
  );
};

const LogoDiv = styled.div`
  width: 35%;
`;
