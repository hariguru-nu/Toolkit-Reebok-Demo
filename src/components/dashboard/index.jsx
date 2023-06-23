import React from "react";
import EbLogo from "../../assets/images/eb_logo.png";
import RbkLogo from "../../assets/images/rbk_logo.png";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.modelContainer}>
          <div className={styles.boxGrid}></div>
          <div className={styles.boxItems}>
            <button className={styles.leftContent}>
              <Link href="https://toolkit-qa.eddiebauer.com">
                <Image src={EbLogo} alt="eb-logo" className={styles.ebLogo} />
              </Link>
            </button>
            <button className={styles.rightContent}>
              <Link href="/login">
                <Image src={RbkLogo} alt="rbk-logo" className={styles.rbkLogo} />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
