import Head from 'next/head';
import { useRouter } from 'next/router';
import Lottie from 'react-lottie-player';
import notFoundPage from '../assets/404-page.json';
import { ErrorInfoBoxDiv } from '../components/Layout';
import { Button } from '../components/UIElements/Button';
import { Description, WhiteText } from '../components/UIElements/Text';

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>404 Page</title>
        <meta name="description" content="This is a 404 page"></meta>
      </Head>
      <>
        <ErrorInfoBoxDiv>
          <Lottie
            loop
            animationData={notFoundPage}
            play
            style={{ width: 350, height: 350 }}
            role="presentation"
            aria-label="An animation svg of a handsome guy standing in front of 404 sign"
          />
          <Description>OPPS! PAGE NOT FOUND</Description>
          <Button onClick={() => router.push('/')}>
            <WhiteText>GO BACK HOME</WhiteText>
          </Button>
        </ErrorInfoBoxDiv>
      </>
    </>
  );
};

export default NotFoundPage;
