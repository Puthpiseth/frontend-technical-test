import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

interface MenuItemsProps {
  clicked?: boolean;
}

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.white};
  margin: 0 auto;
  padding: 0.8rem 2rem;
  box-shadow: 0px 2px 4px ${colors.primary_gray.variant_two};
  position: absolute;
  top: 0;

  @media (min-width: 800px) {
    padding: 0.8rem 7rem;
  }
`;

export const MenuContainer = styled.div<MenuItemsProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 0.5rem;
  cursor: pointer;
  gap: 0.5rem;

  @media (min-width: 600px) {
    gap: 2rem;
  }
`;
