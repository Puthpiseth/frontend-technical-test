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

// import type { NextPage } from 'next';
// import type { AppProps } from 'next/app';
// import type { ReactElement, ReactNode } from 'react';
// import { MainLayout } from '../components/Layout';

// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

// export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
//   const getLayout = Component.getLayout ?? ((page) => page);

//   return <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>;
// }
