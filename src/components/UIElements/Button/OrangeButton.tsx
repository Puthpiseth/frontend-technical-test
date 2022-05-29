import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../../../styles/colors';
import { WhiteText } from '../Text';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const OrangeButton = (props: ButtonProps) => {
  const { text } = props;

  return (
    <Button>
      <WhiteText>{text}</WhiteText>
    </Button>
  );
};

export const Button = styled.div`
  background-color: ${colors.primary_orange};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem;
  width: 40%;
  border-radius: 30px;
  box-shadow: 0px 0px 4px rgba(48, 56, 76, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  @media (min-width: 600px) {
    width: 25%;
  }
`;
