import React from 'react';
import {
  BsPatchExclamation,
  BsTag,
  BsFillPersonLinesFill
} from "react-icons/bs";
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <BsPatchExclamation className={styles.headerIcons}/>
        <BsTag className={styles.headerIcons}/>
        <BsFillPersonLinesFill className={styles.headerIcons}/>
      </div>
    </div>
  )
}

export default Header;
