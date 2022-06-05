import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import { getUsers } from '../api/user.api';
import click from '../assets/click.json';
import { Layout } from '../components/Layout';
import { ConversationContainer, Medium } from '../components/UIElements';
import UserListItem from '../components/User/UserListItem';
import { User } from '../types/user';

const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);

  const router = useRouter();
  const navigateToConversation = (id: number) => () => {
    router.push(`/conversations/${id}`);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users.data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <Head>
        <title>Home-Page</title>
        <meta name="description" content="Welcome to the Home Page"></meta>
      </Head>
      <Layout>
        <Lottie
          loop
          animationData={click}
          play
          style={{ width: 250, height: 250 }}
          role="presentation"
          aria-label="An animation svg of a beautiful lady sitting and clicking a screen"
        />
        <ConversationContainer>
          <Medium>Please click on a user to start your discussion 👇</Medium>
        </ConversationContainer>
        {users.map((user) => (
          <UserListItem key={user.id} userNickname={user.nickname} onClick={navigateToConversation(user.id)} />
        ))}
      </Layout>
    </>
  );
};

export default HomePage;
