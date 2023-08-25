// components/Navbar.js

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 20) {
      setNavVisible(false); // Scroll aşağıda, navbar'ı gizle
    } else {
      setNavVisible(true); // Scroll yukarıda, navbar'ı göster
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClass = `${styles.navbar} ${isNavVisible ? '' : styles.hidden}`;

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
      </ul>
    </nav>
  );
};

export default Navbar;
