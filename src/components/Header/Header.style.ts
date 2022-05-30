import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

interface MenuItemsProps {
  clicked?: boolean;
}

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${colors.white};
  padding: 1rem;
  box-shadow: 0px 2px 4px ${colors.primary_gray.variant_two};
  position: fixed;
  top: 0;
`;

export const MenuContainer = styled.div<MenuItemsProps>`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  gap: 10px;

  @media (min-width: 600px) {
    width: 15%;
  }
`;
