import { Button, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

/*
  This is a dynamic import that will be loaded on demand.
  This must be writting top level, it cannot be inside a component.
  import('../src/DynamicLoadedComponent')
*/
const DynamicLoadedComponent = dynamic(
  () => import('../components/DynamicComponents/DynamicLoadedComponent'),
  {
    // Use suspense parameter for React versions lower then 18.
    // When using suspense, the component will need to be wrapped in a Suspense component.
    // suspense: true,

    // Use loading parameter for React versions equal to or greater then 18.
    // This is the same as suspense, but without the need to wrap the component in a Suspense component.
    loading: () => <p>Loading ...</p>,

    // Use ssr parameter when loading components/modules that rely.
    ssr: false,
  },
);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dynamic Imports</title>
        <meta name="description" content="Dynamic Imports Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h3" color="primary">
          Dynamic Imports
        </Typography>

        <DynamicLoadedComponent />
      </main>
    </div>
  );
};

export default Home;
