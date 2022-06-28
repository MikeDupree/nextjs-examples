import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

type Props = {
  date: string;
  time: string;
};

const Home = ({ date, time }: Props) => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    location.reload();
  };
  const handleRevalidation = (e: any) => {
    axios
      .get('/api/revalidate?uri=/static-generation')
      .then((res) => {
        console.log('res', res);
        toast('revalidate for path: /static-generation!', {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => {
        toast.error('revalidation failed!', {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Static Generation</title>
        <meta name="description" content="Static Generation Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h3">getStaticProps</Typography>

        <Typography color="primary" variant="h4">
          Date: {date}
        </Typography>
        <Typography color="secondary" variant="h4">
          Time: {time}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClick} sx={{ margin: '1rem' }}>
          Refresh Page
        </Button>
        <Button
          id="revalidate"
          variant="contained"
          color="secondary"
          onClick={handleRevalidation}
          sx={{ margin: '1rem' }}
        >
          Force Revalidation (/api/revalidate)
        </Button>
        <Typography variant="body1" gutterBottom>
          Call force revalidation to trigger a new static build at request time.
        </Typography>
        <ToastContainer />
      </main>
    </div>
  );
};

// This gets called on build
export async function getStaticProps() {
  // Set a date when getStaticProps was called.
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();

  // Pass data to the page via props
  return { props: { date, time } };
}

export default Home;
