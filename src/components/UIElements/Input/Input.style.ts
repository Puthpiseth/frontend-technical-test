import styled from '@emotion/styled';
import { colors } from '../../../styles';

export const FormInputContainer = styled.form`
  width: 80%;
`;

export const FormInput = styled.input`
  width: 100%;
  border-radius: 30px;
  border: 2px solid ${colors.primary_gray.variant_two};
  padding: 0.4em;
  outline: none;

  &:focus {
    border: 1px solid ${colors.primary_orange};
  }
`;
