import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button, Typography } from '@mui/material';
type Props = {
  date: string;
  time: string;
};

const Home = ({ date, time }: Props) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    location.reload();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Serverside Rendering</title>
        <meta name="description" content="Serverside Rendering Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h3">getServerSideProps</Typography>

        <Typography color="primary" variant="h4">
          Date: {date}
        </Typography>
        <Typography color="secondary" variant="h4">
          Time: {time}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClick} sx={{ margin: '1rem' }}>
          Refresh Page
        </Button>
      </main>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Set a date when getServerSideProps was called.
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();

  // Pass data to the page via props
  return { props: { date, time } };
}

export default Home;
