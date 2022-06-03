import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

export const MessageLayoutInner = styled.div`
  width: 100%;
  height: 75vh;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 15px;
  align-items: flex-start;
  background: ${colors.primary_gray.variant_five};
  box-shadow: 0px 0px 4px rgba(48, 56, 76, 0.1);
  border-radius: 10px;
  border: 1px solid ${colors.primary_gray.variant_two};
  overflow-y: scroll;
`;
