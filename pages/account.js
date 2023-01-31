import React from 'react';
import { useSession, signOut, getSession } from 'next-auth/react';

const account = () => {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    return (
      <div>
        <p>welcome{session.user.name} to account page</p>
        <img src={session.user.image}></img>

        <button onClick={() => signOut()}>sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You're not signed in to account page </p>
      </div>
    );
  }
};

export default account;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  //using this account route is protected
  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }

  return {
    props: { session },
  };
};
