import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Icon from "../../assets/images/Icon.svg";
import Dashboard from "../../assets/images/dashboard.svg";
import Transactions from "../../assets/images/transactions.svg";
import Performance from "../../assets/images/performance.svg";
import News from "../../assets/images/news.svg";
import Settings from "../../assets/images/settings.svg";
import Support from "../../assets/images/support.svg";
import "./styles.module.scss";

const Sidebar = () => {
  // const location = useLocation();

  const { asPath }  = useRouter();
  console.log(asPath);

  const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  const menuLinks = [
    {
      imageSrc: Dashboard,
      menuText: "dashboard",
      pathname: "/",
    },
    {
      imageSrc: Transactions,
      menuText: "transactions",
      pathname: "/transactions",
    },
    {
      imageSrc: Performance,
      menuText: "performance",
      pathname: "/performance",
    },
    {
      imageSrc: Settings,
      menuText: "settings",
      pathname: "/settings",
    },
    {
      imageSrc: Support,
      menuText: "support",
      pathname: "/support",
    },
    {
      imageSrc: News,
      menuText: "news",
      pathname: "/news",
    },
  ];

  return (
      <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
        <div
          className={
            closeMenu === false ? "logoContainer" : "logoContainer active"
          }
        >
          <Image src={Icon} alt="icon" className="logo" />
          <h2 className="title">evergreen. </h2>
        </div>
        <div
          className={
            closeMenu === false ? "burgerContainer" : "burgerContainer active"
          }
        >
          <div
            className="burgerTrigger"
            onClick={() => {
              handleCloseMenu();
            }}
          ></div>
          <div className="burgerMenu"></div>
        </div>
        <div
          className={
            closeMenu === false
              ? "contentsContainer"
              : "contentsContainer active"
          }
        >
          <ul>
            {menuLinks?.map((links, index) => (
              <li key={index} 
                // className={asPath.includes === "/" ? "active" : ""}
              >
                <Image src={links?.imageSrc} alt="dashboard" />
                <Link href="/">{links?.menuText}</Link>
              </li>
            ))}
            {/* <li className={location.pathname === "/" ? "active" : ""}>
              <Image src={Dashboard} alt="dashboard" />
              <Link to="/">dashboard</Link>
            </li>
            <li
              className={location.pathname === "/transactions" ? "active" : ""}
            >
              <Image src={Transactions} alt="transactions" />
              <Link to="/transactions">transactions</Link>
            </li>
            <li
              className={location.pathname === "/performance" ? "active" : ""}
            >
              <Image src={Performance} alt="Performance" />
              <Link to="/performance">performance</Link>
            </li>
            <li className={location.pathname === "/news" ? "active" : ""}>
              <Image src={News} alt="News" />
              <Link to="/news">news</Link>
            </li>
            <li className={location.pathname === "/settings" ? "active" : ""}>
              <Image src={Settings} alt="Settings" />
              <Link to="/settings">settings</Link>
            </li>
            <li className={location.pathname === "/support" ? "active" : ""}>
              <Image src={Support} alt="Support" />
              <Link to="/support">support</Link>
            </li> */}
          </ul>
        </div>
      </div>
  );
};

export default Sidebar;
