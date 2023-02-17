import React from 'react';
import BiddingPieChart from '../../charts/pieChart';

import styles from './style.module.scss';

function PieBig() {
  return (
    <div className={styles.pieContainer}>
      <h5>Bidding Overview</h5>
      <div className="d-flex">
        <BiddingPieChart />
      </div>
    </div>
  );
}

export default PieBig;
