// components/Footer.js

import styles from './Footer.module.css'; // For styling
import Image from "next/image"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
        <Image 
          src="https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b01600a_deskree-logo-white.svg" 
          alt="Logo" 
          className={styles.logoImage}
          width={150}
          height={50} />
          <text style={{ color: 'grey' }}>Deskree is a cloud platform that simplifies and optimizes backend development and infrastructure management for businesses and developers.</text>
        </div>
        <ul className={styles.links}>
          <li><text>Products</text></li>
          <li><a href="/BaaS">BaaS</a></li>
          <li><a href="/ION">ION</a></li>
          <li><a href="/Atomic">Atomic</a></li>
        </ul>
        <ul className={styles.links}>
          <li><text>Solutions</text></li>
          <li><a href="/Enterprise">Enterprise</a></li>
          <li><a href="/Accelerate">Accelerate</a></li>
        </ul>
        <ul className={styles.links}>
          <li><text>Resources</text></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Blog">Blog</a></li>
          <li><a href="/Brand-Guidelines">Brand Guidlines</a></li>
          <li><a href="/Privacy">Privacy</a></li>
          <li><a href="/Terms">Terms</a></li>
          <li><a href="/Whistleblower">Whistleblower</a></li>
          <li><a href="/Trust-Center">Trust Center</a></li>
        </ul>
        <ul className={styles.links}>
          <li><text>Contact</text></li>
          <li><a href="/Support">Support</a></li>
          <li><a href="/Investors">Investors</a></li>
          <li><a href="/Partnerships">Partnerships</a></li>
          <li><a href="/Twitter">Twitter</a></li>
          <li><a href="/LinkedIn">LinkedIn</a></li>
          <li><a href="/Discord">Discord</a></li>
          <li><a href="/GitHub">GitHub</a></li>
          <li><a href="/Youtube">Youtube</a></li>
        </ul>
      </div>
      <text> © Copyright 2024, Deskree Technologies</text>
    </footer>
  );
};

export default Footer;