import type { AppProps } from 'next/app';
import { MainLayout } from '../components/Layout/MainLayout';
import '../styles/globals.css';
import { getLoggedUserId } from '../utils/getLoggedUserId';

// Default way to get a logged user
export const loggedUserId = getLoggedUserId();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
