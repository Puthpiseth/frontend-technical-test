import styled from '@emotion/styled';
import { colors } from '../../../styles';

export const FormInputLayout = styled.div`
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 0.5em;
`;

export const FormInput = styled.input`
  width: 100%;
  border-radius: 10px;
  border: 2px solid ${colors.primary_gray.variant_two};
  background: ${colors.white};
  padding: 0.6em;
  outline: none;

  &:focus {
    border: 1px solid ${colors.primary_orange};
  }
`;

export const FormButton = styled.button`
  width: 15px;
  height: 15px;
`;
