import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

import styles from './style.module.scss';

function pieSmall(props) {
  return (
    <div className={styles.pieContainer}>
      {props.withouticon && (
        <h5>source</h5>
      )}
      
      {props.withicon && (
        <h5>{props.title} <IoIosArrowForward/></h5>
      )}
      <div className={styles.pieChart}></div>
      <p>
        <div className={styles.pie1}></div> <span>From web</span>
      </p>
      <p>
        <div className={styles.pie2}></div> <span>From OLX</span>
      </p>
    </div>
  );
}

export default pieSmall;
