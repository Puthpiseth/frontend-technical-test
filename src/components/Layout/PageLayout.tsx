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

export const ErrorInfoBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserListLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
`;
