import Head from 'next/head';
import { useRouter } from 'next/router';
import Lottie from 'react-lottie-player';
import serverErrorPage from '../assets/server-error.json';
import { ErrorInfoBoxDiv } from '../components/Layout';
import { Button } from '../components/UIElements';
import { Description, WhiteText } from '../components/UIElements/Text';

const ErrorPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>500 Page</title>
        <meta name="description" content="This is a 500 page"></meta>
      </Head>
      <>
        <ErrorInfoBoxDiv>
          <Lottie
            loop
            animationData={serverErrorPage}
            play
            style={{ width: 350, height: 350 }}
            role="presentation"
            aria-label="An animation svg of a handsome guy standing in front of 404 sign"
          />
          <Description>Sorry, something went wrong</Description>
          <Button onClick={() => router.push('/')}>
            <WhiteText>GO BACK HOME</WhiteText>
          </Button>
        </ErrorInfoBoxDiv>
      </>
    </>
  );
};

export default ErrorPage;
