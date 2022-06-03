import Image from 'next/image';
import Link from 'next/Link';
import Logo from '../../assets/leboncoin-logo.svg';
import { MenuItem } from '../UIElements/Text';
import { HeaderContainer, MenuContainer } from './Header.style';

export const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={Logo} alt="Leboncoin Logo" width={140} height={40}></Image>
      </Link>
      <MenuContainer>
        <Link href="/">
          <MenuItem>Home</MenuItem>
        </Link>
      </MenuContainer>
    </HeaderContainer>
  );
};
