import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [isFooterVisible, setFooterVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const pageHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + pageHeight >= scrollHeight - 20) {
      setFooterVisible(true); // Sayfanın sonuna yaklaşıldığında footer'ı görünür yap
    } else {
      setFooterVisible(false); // Sayfanın sonundan uzaklaşıldığında gizle
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const footerClass = `${styles.footer} ${isFooterVisible ? "" : styles.hidden}`;

  return (
    <div>
      <footer className={footerClass}>
        <div className={styles.socialIcons}>
          <a
            href="https://www.instagram.com/zadaenerji/?igshid=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ fontSize: "32px" }} />
          </a>
        </div>
        <div>
          <p>Geleceğe güç ver! - Website by: Ömer Faruk Fidan & Özgenur Yıldız</p>
        </div>
      </footer>
      <div style={{ marginBottom: "80px" }}>{/* Footer yüksekliği kadar boşluk bırakın */}</div>
    </div>
  );
};

export default Footer;
