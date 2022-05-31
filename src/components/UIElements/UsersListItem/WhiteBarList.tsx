import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

interface WhiteBarListProps {
  // eslint-disable-next-line no-unused-vars
  onclick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  clicked?: boolean;
  children: React.ReactNode;
}

export const WhiteBarList = ({ onclick, children, clicked }: WhiteBarListProps) => {
  return (
    <WhiteBar clicked={clicked} onClick={onclick}>
      {children}
    </WhiteBar>
  );
};

interface WhiteBarProps {
  clicked?: boolean;
}

const WhiteBar = styled.div<WhiteBarProps>`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0px 0px 4px rgba(48, 56, 76, 0.1);
  border-radius: 10px;
  border: 1px solid ${colors.primary_gray.variant_two};
  padding: 0.8rem 1rem;
  cursor: pointer;
  background: ${colors.primary_gray.variant_five};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${colors.primary_orange};
    border: 1px solid ${colors.primary_orange};
  }

  @media (max-width: 1000px) {
    display: none;
  }
  @media (min-width: 1000px) {
    width: 30%;
  }
  @media (min-width: 1300px) {
    width: 25%;
  }
`;
