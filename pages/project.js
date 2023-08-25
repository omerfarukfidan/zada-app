// pages/project.js

import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/project.module.css"; // CSS dosyanızın yolunu burada belirtin

export default function About() {
  return (
    <div>
      <Head>
        <title>Hakkımızda - My Next.js Website</title>
        <meta name="description" content="Proje ekibi hakkında bilgi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.container}>
        {" "}
        {/* Stil sınıfını burada ekleyin */}
        <main>
          <h1>Projemiz</h1>
          <p>
            Projemiz, özgün bir tasarım olan iki kanatlı Savonius ile düz tip
            Darrieus entegreli bir rüzgar türbini içermektedir. Ayrıca yapay
            zeka ile desteklenen elektrik direği, enerjinin optimal kullanımını
            sağlamak için çalışır.
          </p>
        </main>
      </div>
    </div>
  );
}
