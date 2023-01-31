import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import loginImg from '../assets/login.png ';
// import { useSession, signIn, signOut } from 'next-auth/react';

const login = () => {
  // const { data: session } = useSession();
  // const handleGoogleSignIn = async () => {
  //   signIn('google', { callbackUrl: 'http://localhost:3000' });
  // };

  // if (session) {
  //   console.log(session);
  //   return (
  //     <div>
  //       <p>Welcome ,{session.user.name}</p>
  //       <img src={session.user.image}></img>
  //       <button onClick={() => signOut()}>sign out</button>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <p>You are not signed in</p>
  //       <button onClick={() => signIn()}>sign in</button>
  //     </div>
  //   );
  // }

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="login-title">Login</h1>
        <form>
          <label htmlFor="email">
            <input
              type="email"
              // value={email}
              name="email"
              placeholder="email"
              onChange=""
              required
              invalid
              validation="Provide your email"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              // value={password}
              name="password"
              placeholder="password"
              onChange=""
              required
              invalid
              validation="Provide your password"
            />
          </label>
          <button className="login-button">Login</button>
          <a>
            <Link href={'/register'}>
              Dont Have an account?
              <p className="register">Register Now!</p>
            </Link>
          </a>

          {/* {error && <div className="errorMessage">Wrong Credentials !</div>} */}
        </form>
      </div>
    </div>
  );
};

export default login;

{
  /* <Head> */
}
{
  /* <title>Login</title>
      </Head>
      <div>
        <h1>Login</h1>
        <p>Lorem jkdbhfvgdshjcgdshbjc hjb dvdsh</p>
        <form>
          <div>
            <input
              type="email"
              name="email"
              placeholder="email"
              autoComplete="username  "
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              autoComplete="current-password"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div>
            <button type="submit" onClick="">
              Sign with Google
            </button>
          </div>
        </form>
      </div>
      <p>
        Dont have an account yet ? <Link href={'/register'}>Sign up</Link>
      </p> */
}
