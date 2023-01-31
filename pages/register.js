import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const register = () => {
  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      <section>
        <div>
          <h1>Register</h1>
          <p>Lorem jkdbhfvgdshjcgdshbjc hjb dvdsh</p>
          <form>
            <div>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div>
              <input type="email" name="email" placeholder="Email" />
            </div>

            <div>
              <input type="password" name="password" placeholder="password" />
            </div>
            <div>
              <input
                type="password"
                name="cpassword"
                placeholder="confirm password"
              />
            </div>
            <div>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
        <p>
          Already Have an account ? <Link href={'/login'}>Login</Link>
        </p>
      </section>
    </div>
  );
};

export default register;
