import React from 'react';
import PieChart from '../../charts/pieChart';
import { IoIosArrowForward } from "react-icons/io";

import styles from './style.module.scss';

function PieSmall(props) {
  return (
    <div className={styles.pieContainer}>
      {props.withouticon && (
        <h5>Source</h5>
      )}
      {props.icon && (
        <h5>Procured <IoIosArrowForward/> </h5>
      )}
      
      <PieChart />
    </div>
  );
}

export default PieSmall;
