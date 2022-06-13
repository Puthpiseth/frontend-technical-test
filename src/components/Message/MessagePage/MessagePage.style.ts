import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

export const MessageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 75vh;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 0;
  align-items: center;
  background: ${colors.primary_gray.variant_five};
  box-shadow: 0px 0px 4px rgba(48, 56, 76, 0.1);
  border-radius: 10px;
  border: 1px solid ${colors.primary_gray.variant_two};
`;

export const MessageLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MessageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.primary_gray.regular};
  padding-bottom: 1rem;
`;

export const MessageBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
  overflow-y: scroll;
`;

export const ArrowLeft = styled.div`
  position: absolute;
  left: 1rem;
  padding: 5px;
  background: ${colors.primary_gray.variant_two};
  box-shadow: 0px 0px 4px rgba(48, 56, 76, 0.1);
  border-radius: 50%;
  border: 1px solid ${colors.primary_gray.regular};
  cursor: pointer;

  &:hover {
    background: ${colors.primary_gray.regular};
  }
`;

export const Banner = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
