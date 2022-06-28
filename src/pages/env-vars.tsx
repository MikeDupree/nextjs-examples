import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button, Typography } from '@mui/material';
type Props = {};

const Home = ({}: Props) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    location.reload();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Training</title>
        <meta name="description" content="Serverside Rendering" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h3">Env Vars</Typography>

        <Typography color="primary" variant="h4">
          Client Side Variables
        </Typography>
        <Typography color="primary" variant="h6">
          NEXT_PUBLIC_CLIENT_VAR_1: {process.env.NEXT_PUBLIC_CLIENT_VAR_1}
        </Typography>
        <Typography color="secondary" variant="h6">
          SERVER_VAR_1: NULL, because this is a serverside var
          {/* If you try to use a serverside var in a client side component, it will throw a hydration
          error because the variable will only be visible on the server the serverside rendered page will
          not match the clientside rendered page*/}
        </Typography>
      </main>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Set a date when getServerSideProps was called.
  const serverVar = process.env.SERVER_VAR_1;
  console.log('serverVar', serverVar);
  // Pass data to the page via props
  return { props: {} };
}

export default Home;
