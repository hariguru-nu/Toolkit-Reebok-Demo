import React from 'react';
import Sidebar from '../sidebar/index';
import Header from '../header';
import styles from './styles.module.scss';
import Table from '../table';

const Layout = () => {
  return (
    <div className={styles.pageContainer}>
        <Sidebar />
        <div className={styles.contentPageContainer}>
          <Header />
          <Table />
        </div>
    </div>
  )
}

export default Layout;
