// pages/index.js

import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

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

        <div className={styles.content}>
          <p>
            Günümüzde enerji ihtiyacında kullanılan fosil yakıtlar çevreye zarar
            vermektedir ve aynı zamanda fazla maliyet olarak da yansımaktadır.
            Biz, Zada Enerji olarak, bu sorunu çözmek ve temiz enerjiyi teşvik
            etmek için çalışıyoruz.
          </p>
          <p>
            Projemiz, rüzgar ve güneş enerjisi kullanarak yüksek verimli,
            yenilikçi ve akıllı bir elektrik direği tasarladı. Bu direk
            enerjisini özgün rüzgar türbininden ve güneş panelinden alıyor,
            çevreyi aydınlatıyor ve cihazları şarj ediyor.
          </p>
          <p>
            Üzerinde bulunan karekod, mobil uygulamamız veya internet
            sitemizden, yanınızdaki Akıllı Elektrik Direği'nin çevreye olan
            faydasını, elde edilen kazancı ve daha fazla veriyi görüntülemenize
            olanak tanır.
          </p>
          <p>
            Akıllı Elektrik Direkleri’nin şarj, ışık miktarı ve benzeri
            özellikleri, kullanıcılar tarafından mobil uygulama veya internet
            sitemiz aracılığıyla kontrol edilebilir.
          </p>
        </div>
      </main>
    </div>
  );
}
