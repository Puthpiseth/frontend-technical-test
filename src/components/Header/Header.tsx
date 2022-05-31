import Image from 'next/image';
import Logo from '../../assets/leboncoin-logo.svg';
import { MenuItem } from '../UIElements/Text';
import { HeaderContainer, MenuContainer } from './Header.style';

export const Header = () => {
  return (
    <HeaderContainer>
      <Image src={Logo} alt="Leboncoin Logo" width={140} height={40}></Image>
      <MenuContainer>
        <MenuItem>Home</MenuItem>
        <MenuItem>Messages</MenuItem>
      </MenuContainer>
    </HeaderContainer>
  );
};
