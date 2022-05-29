import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

interface GrayChatBubbleProps {
  // eslint-disable-next-line no-unused-vars
  onclick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
}

export const GrayChatBubble = ({ onclick, children }: GrayChatBubbleProps) => {
  return <GrayBarDiv onClick={onclick}>{children}</GrayBarDiv>;
};

const GrayBarDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 2px rgba(48, 56, 76, 0.1);
  border-radius: 50px;
  border: 1px solid ${colors.primary_gray.variant_two};
  background: ${colors.primary_gray.variant_two};
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;
