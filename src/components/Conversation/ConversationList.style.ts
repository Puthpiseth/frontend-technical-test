import styled from '@emotion/styled';

export const ConversationBarList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  gap: 10px;

  @media (min-width: 1200px) {
    align-items: flex-start;
  }
`;

export const ConversationLayout = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const ConversationListHeader = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const ConversationListTitle = styled.div`
  display: flex;
  justify-content: center;
  font-family: Work-sans;
  font-size: 20px;
`;

export const ConversationMobileLayout = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 12rem;
  gap: 2rem;
`;
