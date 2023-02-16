import React from 'react';

import styles from './style.module.scss';

function pieSmall() {
  return (
    <div className={styles.pieContainer}>
      <h5>source</h5>
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
