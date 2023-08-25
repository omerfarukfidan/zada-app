// pages/about.js

import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/about.module.css'; // CSS dosyanızın yolunu burada belirtin

export default function About() {
  return (
    <div>
      <Head>
        <title>Hakkımızda - My Next.js Website</title>
        <meta name="description" content="Proje ekibi hakkında bilgi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.container}> {/* Stil sınıfını burada ekleyin */}
        <main>
          <h1>Hakkımızda</h1>
          <p>Proje ekibi hakkında bilgi veren metin.</p>
        </main>
      </div>
    </div>
  );
}
