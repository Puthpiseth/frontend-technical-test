import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  gap: 8px;
  overflow-y: scroll;

  @media (min-width: 1200px) {
    padding-top: 4rem;
    overflow: hidden;
  }
`;

export const NotFoundInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
