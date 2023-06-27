import React,{useState} from 'react';
 
import {
  BsPatchExclamation,
  BsTag,
  BsFillPersonLinesFill
} from "react-icons/bs";
import styles from './styles.module.scss';
import Link from 'next/link';

const Header = () => {
  const [card,setCard]=useState(false);
const handleClick=()=>{
  setCard(!card)
}
  const renderComponent=()=>{return(<div className={styles.card}>
      <ul className={styles.list}>
        <li><Link href="/" className={styles.logout}>Logout </Link> </li>
      </ul>
    </div>
  
  )}
  return (
    <div className={styles.header}>
        <BsPatchExclamation className={styles.headerIcons}/>
        <BsTag className={styles.headerIcons}/>
         
        <BsFillPersonLinesFill className={styles.headerIcons} onClick={handleClick} />
        {card && renderComponent()}
    
    </div>
  )
}

export default Header;
