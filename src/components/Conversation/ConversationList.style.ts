import styled from '@emotion/styled';

export const ConversationLayout = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConversationListLayout = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
`;
