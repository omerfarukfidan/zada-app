// pages/about.js

import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css"; // CSS dosyanızın yolunu burada belirtin

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
          <div>
            <h1>Hakkımızda</h1>
            <p>
              Zada Enerji, temiz enerjiyi teşvik etmek ve çevreye saygılı enerji
              çözümleri sunmak amacıyla kurulmuş bir ekiptir. Projemiz,
              Türkiye'nin güneş ve rüzgar enerjisi potansiyelini kullanarak
              enerji ihtiyacını karşılamayı hedefliyor.
            </p>

            <p>
              Projemizin tasarımı, yerli kaynakları kullanarak %70 yerli malzeme
              ve yazılım imkanlarıyla gerçekleştirilmiştir.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
