import React from "react";
import Sidebar from "../sidebar/index";
import Header from "../header";
import styles from "./styles.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "../table";
import Dashboard from "@/pages/Dashbaord";
import News from "@/pages/News";
import Performance from "@/pages/Performance";
import Settings from "@/pages/Settings";
import Support from "@/pages/Support";
import Transactions from "@/pages/Transactions";

const Layout = () => {
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <div className={styles.contentPageContainer}>
        <Header />
        {/* <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes> */}
      </div>
    </div>
  );
};

export default Layout;
