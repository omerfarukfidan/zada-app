// pages/faq.js

import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import styles from "../styles/faq.module.css";

export default function FAQ() {
  const [questions, setQuestions] = useState([
    { question: "Soru 1", answer: "Cevap 1", isOpen: false },
    { question: "Soru 2", answer: "Cevap 2", isOpen: false },
    // Daha fazla soru ve cevap ekleyebilirsiniz
  ]);

  const toggleQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].isOpen = !newQuestions[index].isOpen;
    setQuestions(newQuestions);
  };

  return (
    <div>
      <Head>
        <title>Sık Sorulan Sorular</title>
        <meta name="description" content="Sık Sorulan Sorular sayfası" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.faqContainer}>
        <h1>Sık Sorulan Sorular</h1>

        {questions.map((item, index) => (
          <section key={index} className={styles.faqSection}>
            <div
              className={styles.faqQuestion}
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
              <span>{item.isOpen ? "-" : "+"}</span>
            </div>
            {item.isOpen && (
              <div className={`${styles.faqAnswer} ${styles.active}`}>
                {item.answer}
              </div>
            )}
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
