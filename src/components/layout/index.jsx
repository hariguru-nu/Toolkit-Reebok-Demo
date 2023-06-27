import React from "react";
import Sidebar from "../sidebar/index";
import Header from "../header";
import styles from "./styles.module.scss";


const Layout = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <div className={styles.contentPageContainer}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
