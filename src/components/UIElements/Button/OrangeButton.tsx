import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

export const Button = styled.div`
  background-color: ${colors.primary_orange};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
  width: 45%;
  border-radius: 20px;
  box-shadow: 0px 0px 4px rgba(48, 56, 76, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;
