import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Dashboard from "../../assets/images/dashboard.svg";
import Transactions from "../../assets/images/transactions.svg";
import Performance from "../../assets/images/performance.svg";
import News from "../../assets/images/news.svg";
import Settings from "../../assets/images/settings.svg";
import ReebokIcon from "../../assets/images/reebok-logo.png"
import Support from "../../assets/images/support.svg";
import styles from "./styles.module.scss";

const Sidebar = () => {
  const { asPath }  = useRouter();
  console.log(asPath);

  const [closeMenu, setCloseMenu] = useState(false);
  const [activeTab, setActiveTab] = useState();

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  const handleActiveTab = (id) => {
    console.log(id, "id");
    setActiveTab(id);
  }

  const menuLinks = [
    {
      imageSrc: Dashboard,
      menuText: "Database",
      pathname: "/database",
    },
    {
      imageSrc: Transactions,
      menuText: "Transactions",
      pathname: "/transactions",
    },
    {
      imageSrc: News,
      menuText: "Report",
      pathname: "/report",
      subMenu: [
        {
          menuText: "US Report",
          pathname: "/report/report-us",
        },
        {
          menuText: "CA Report",
          pathname: "/report/report-ca",
        },
        {
          menuText: "OUTLET Report",
          pathname: "/report/report-outlet",
        }
      ]
    },
    {
      imageSrc: Settings,
      menuText: "Orders",
      pathname: "/orders",
      subMenu: [
        {
          menuText: "Order details",
          pathname: "/orders/order-detail",
        },
        {
          menuText: "Order Demand",
          pathname: "/orders/order-demand",
        },
      ]
    },
    {
      imageSrc: Support,
      menuText: "AWS",
      pathname: "/aws",
      subMenu: [
        {
          menuText: "Lambda Actions",
          pathname: "/aws/lambda",
        },
        {
          menuText: "API",
          pathname: "/aws/api-action",
        }
        
      ]
    },
    {
      imageSrc: Performance,
      menuText: "Performance",
      pathname: "/performance",
    },
    
    
  ];

  return (
      <div className={`${styles.sidebar} ${closeMenu === false ? styles.sidebar : styles.active}`}>
        <div
          className={`${styles.logoContainer} ${ closeMenu === false ? styles.logoContainer : styles.active}`}
        >
          <Image src={ReebokIcon} alt="icon" className={styles.logo} />
          <h2 className={styles.title}>REEBOK </h2>
        </div>
        <div
          className={`${styles.burgerContainer} ${closeMenu === false ? styles.burgerContainer : styles.active }`}
        >
          <div
            className={styles.burgerTrigger}
            onClick={() => {
              handleCloseMenu();
            }}
          ></div>
          <div className={styles.burgerMenu}></div>
        </div>
        <div
          className={`${styles.contentsContainer} ${ closeMenu === false
            ? styles.contentsContainer
            : styles.active }`}
        >
          <ul>
            {menuLinks?.map((links, index) => (
              <>
              <li key={index} 
                className={asPath === links?.pathname ? "menuActive" : ""}
                onClick={() => handleActiveTab(index)}
              >
                <Image src={links?.imageSrc} alt="dashboard" />
                <Link href={links?.pathname}>{links?.menuText}</Link>
              </li>
              
              {/* {index === activeTab && links?.subMenu && (
                links?.subMenu?.map((item, index) => (
                  <li key={index} className={styles.subMenu}>
                    <Link href={item?.pathname}>{item?.menuText}</Link>
                  </li>
                ))
                  
              )} */}
              </>
            ))}
           
          </ul>
        </div>
      </div>
  );
};

export default Sidebar;
