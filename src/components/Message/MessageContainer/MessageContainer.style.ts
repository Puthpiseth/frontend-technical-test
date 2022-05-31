import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

export const MessageContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0;
  align-items: center;
  background: ${colors.primary_gray.variant_five};
  box-shadow: 0px 0px 4px rgba(48, 56, 76, 0.1);
  border-radius: 10px;
  border: 1px solid ${colors.primary_gray.variant_two};

  @media (min-width: 1000px) {
    width: 65%;
  }
  @media (min-width: 1300px) {
    width: 50%;
  }
`;

export const MessageHeader = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
