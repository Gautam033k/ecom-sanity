import React from 'react';
import '@/styles/globals.css';
import { Layout } from '../components';
import { StateContext } from '@/context/StateContext';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps, session }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </StateContext>
  );
}
