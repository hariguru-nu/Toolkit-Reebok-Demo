import React from "react";
import EbLogo from "../../assets/images/eb_logo.png";
import RbkLogo from "../../assets/images/rbk-logo.png";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className= {styles.app}>
     <div className={styles.container}>
       <div className={styles.sparcContainer}>
         <div className={styles.sparcImg}></div>
       </div>
       <div className={styles.btnGroup}>
         <Link href="https://toolkit-qa.eddiebauer.com" className={styles.btnLink}>
           <Image src={EbLogo}alt="" className={styles.eblogo} />
         </Link>
         <Link href="/login" className={styles.btnLink}>
           <Image src={RbkLogo} alt="" className={styles.rbklogo} />
         </Link>
       </div>
     </div>
   </div>
  );
};

export default HomePage;
