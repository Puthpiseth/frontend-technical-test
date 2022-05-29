import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

interface OrangeChatBubbleProps {
  // eslint-disable-next-line no-unused-vars
  onclick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
}

export const OrangeChatBubble = ({ onclick, children }: OrangeChatBubbleProps) => {
  return <OrangeBarDiv onClick={onclick}>{children}</OrangeBarDiv>;
};

const OrangeBarDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 4px rgba(48, 56, 76, 0.1);
  border-radius: 50px;
  background: ${colors.primary_orange};
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;
