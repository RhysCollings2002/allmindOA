// components/Header.js

import Link from 'next/link';
import styles from './Header.module.css'; // For styling
import Image from "next/image";


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image 
          src="https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b01600a_deskree-logo-white.svg" 
          alt="Logo" 
          className={styles.logoImage}
          width={150}
          height={50} />
        </Link>
        <div className={styles.navs}>
        <Link href="/Products">
          <text className={styles.button}>Products</text>
        </Link>
        <Link href="/Solutions">
          <text className={styles.button}>Solutions</text>
        </Link>
        <Link href="/Pricing">
          <text className={styles.button}>Pricing</text>
        </Link>
        <Link href="/Documentation">
          <text className={styles.button}>Documentation</text>
        </Link>
        </div>
        <div>
        <Link href="/Login">
          <text className={styles.login}>Login</text>
        </Link>
        <Link href="/Signup">
          <text className={styles.signup}>Signup</text>
        </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;