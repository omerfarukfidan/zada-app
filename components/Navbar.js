// components/Navbar.js

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const screenWidth = window.innerWidth;

    if (scrollTop > 20 || screenWidth <= 768) {
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Sayfa yüklendiğinde ekran genişliğini kontrol etmek için
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navClass = `${styles.navbar} ${isNavVisible ? "" : styles.hidden} ${
    isMobile ? styles.mobile : ""
  }`;

  return (
    <nav className={navClass}>
      <div className={styles.brand}>
        <span className={styles.logo}>ZADA ENERJİ</span>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Anasayfa</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">Hakkımızda</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/project">Projemiz</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/faq">SSS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
