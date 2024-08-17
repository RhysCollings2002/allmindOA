
import Link from 'next/link';
import styles from './Body.module.css'; // For styling
import Image from "next/image";


const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.first}>
        <text className={styles.header}>Your backend more simplified, scalable, and manageable than ever.</text>
        <div>
        <Link href="/started">
          <text className={styles.blueButton}>Get Started</text>
        </Link>
        <Link href="/demo">
          <text className={styles.greyButton}>Book a Demo</text>
        </Link>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.productHeaders}>
            <text className={styles.productwhiteText}>Build cloud infrastructure with ease, powered by open-source, Atomic architecture.</text>
            <text className={styles.productGreyText}>Deploy scalable and reusable workflows for your complex backend processes using nodes with no configuration, running independently, all managed by the Atomic architecture.</text>
        </div>
        <div className={styles.products}>
            <text>Our products</text>
            <div className={styles.productButtons}>
                <Link href="/BaaS" className={styles.productButton}>
                    <Image 
                        src="https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b016026_deskree-platform.svg" 
                        alt="Logo" 
                        className={styles.logoImage}
                        width={250}
                        height={50} />
                    <text className={styles.baas}>BaaS</text>
                    <text className={styles.baas}>Pre-built backend services for web and mobile apps, powered by ION and DAC.</text>
                    <text>Learn more</text>
                </Link>
                <Link href="/ION" className={styles.productButton}>
                    <Image 
                        src="https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b016025_ion-platform.svg" 
                        alt="Logo" 
                        className={styles.logoImage}
                        width={250}
                        height={50} />
                    <text className={styles.ion}>ION</text>
                    <text className={styles.ion}>Manage Integration, APIs and complex backend processes, visually with built in nodes.</text>
                    <text>Learn more</text>
                </Link>
                <Link href="/Atomic" className={styles.productButton}>
                    <Image 
                        src="https://cdn.prod.website-files.com/66a101bd03b5993a9b015f9d/66a101bd03b5993a9b016024_dac-platform.svg" 
                        alt="Logo" 
                        className={styles.logoImage}
                        width={250}
                        height={50} />
                    <text className={styles.atomic}>Atomic Computing</text>
                    <text className={styles.atomic}>Create and deploy scalable cloud infrastructure with ease with Atomic framework.</text>
                    <text>Learn more</text>
                </Link>
            </div>
        </div>

      </div>
      <div className={styles.third}>
      <Image 
                        src="/cardsPlaceHolder.png" 
                        alt="Logo" 
                        className={styles.logoImage}
                        width={1250}
                        height={50} />
      </div>
      <div className={styles.greyBox}>
        <text className={styles.greyBoxText}>With Deskree, developers and business focus more on innovation and less on complex cloud setup.</text>
        <div className={styles.button}>
        <Link href="/started">
          <text className={styles.blueButton}>Get Started</text>
        </Link>
        <Link href="/demo">
          <text className={styles.greyButton}>Book a Demo</text>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;