import { LogoIcon } from '../UIElements/Logo/LogoIcon';
import { MenuItem } from '../UIElements/Text';
import { HeaderContainer, MenuContainer } from './Header.style';

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoIcon />
      <MenuContainer>
        <MenuItem>Home</MenuItem>
        <MenuItem>Messages</MenuItem>
      </MenuContainer>
    </HeaderContainer>
  );
};
