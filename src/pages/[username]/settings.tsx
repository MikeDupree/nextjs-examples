import type { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { Button, Typography } from '@mui/material';
type Props = {
  username: string;
};

const Settings = ({ username }: Props) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>User Settings</title>
        <meta name="description" content="User Settings Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h3"> Settings </Typography>

        <div style={{ display: 'block' }}>
          <Typography variant="h5" sx={{ textAlign: 'left' }}>
            Filename:{' '}
            <b style={{ color: 'green' }}>
              pages/<b style={{ color: '#556cd6' }}>[username]</b>/settings.tsx
            </b>
          </Typography>
          <Typography variant="h5" sx={{ textAlign: 'left' }}>
            Pathname: <b style={{ color: 'green' }}>{router.pathname}</b>
          </Typography>
          <Typography variant="h5" sx={{ textAlign: 'left' }}>
            URL: <b style={{ color: 'green' }}>{router.asPath}</b>
          </Typography>
          <Typography variant="h5" color="primary" sx={{ padding: '10px', fontWeight: 'bold' }}>
            [username] = <b style={{ color: 'green' }}>{username}</b>
          </Typography>
        </div>
        <Typography variant="h5">
          Dynamic route segments allow you to make directory paths dynamic within your application.
        </Typography>
        <Typography variant="h5">
          The application takes the path and parses the <b style={{ color: '#556cd6' }}>username</b>{' '}
          from the path which can be used within the routes logic.
        </Typography>
      </main>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      username: context.query.username,
    },
  };
}

export default Settings;
