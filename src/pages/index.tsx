import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import { getUsers } from '../api/user.api';
import click from '../assets/click.json';
import { UserListLayout } from '../components/Layout';
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
      <Lottie
        loop
        animationData={click}
        play
        style={{ width: 150, height: 150 }}
        role="presentation"
        aria-label="An animation svg of a beautiful lady sitting and clicking a screen"
        data-cy="homepage-animated-svg"
      />
      <ConversationContainer>
        <Medium>
          Hello, welcome to the Leboncoin chat plateform. Please click on a user to start your discussion 👇
        </Medium>
      </ConversationContainer>
      <UserListLayout data-cy="user-list">
        {users.map((user) => (
          <UserListItem key={user.id} userNickname={user.nickname} onClick={navigateToConversation(user.id)} />
        ))}
      </UserListLayout>
    </>
  );
};

export default HomePage;
