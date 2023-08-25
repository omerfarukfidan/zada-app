// pages/index.js

import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Next.js Website</title>
        <meta name="description" content="A basic Next.js website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar /> {/* Navigasyon çubuğunu ekliyoruz */}
      
      <main className={styles.main}>
        <h1 className={styles.title}>Zada, gelecek için temiz enerji!</h1>
      </main>
    </div>
  );
}
