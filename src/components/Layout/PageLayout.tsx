import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  height: 91vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 10px;
  overflow-y: scroll;

  @media (min-width: 1200px) {
    padding-top: 3.7rem;
    overflow: hidden;
  }
`;

export const NotFoundInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
