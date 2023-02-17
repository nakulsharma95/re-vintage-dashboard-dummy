import React from 'react';
import PieChart from '../../charts/pieChart';

import styles from './style.module.scss';

function pieSmall() {
  return (
    <div className={styles.pieContainer}>
      <h5>Procured</h5>
      <PieChart />
    </div>
  );
}

export default pieSmall;
