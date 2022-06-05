import styled from '@emotion/styled';
import { colors } from '../../../styles';

export const FormInputLayout = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: strech;
  gap: 0.5em;
`;

export const FormInput = styled.input`
  width: 100%;
  font-size: 16px;
  border-radius: 10px;
  border: 2px solid ${colors.primary_gray.variant_two};
  background: ${colors.white};
  padding: 8px;
  outline: none;

  &:focus {
    border: 1px solid ${colors.primary_orange};
  }
`;
