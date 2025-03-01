import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

interface UserProps {
  userName: string;
}

export const UserAvatar = ({ userName }: UserProps) => {
  return <AvatarDiv>{userName}</AvatarDiv>;
};

const AvatarDiv = styled.div`
  font-family: Work-San;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primary_gray.variant_two};
  border: 2px solid ${colors.primary_gray.variant_four};
  color: ${colors.primary_orange};
  border-radius: 50%;
  height: 5vh;
  width: 5vh;
`;
