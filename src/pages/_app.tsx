import type { AppProps } from 'next/app';
import { MainLayout } from '../components/Layout/MainLayout';
// import { store } from '../state/store';
import { Provider } from 'react-redux';
import store from '../state/store';
import '../styles/globals.css';
import { getLoggedUserId } from '../utils/getLoggedUserId';
// Default way to get a logged user
export const loggedUserId = getLoggedUserId();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
