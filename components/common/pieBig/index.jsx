import React from 'react'

import styles from './style.module.scss';

function pieBig() {
  return (
	<div className={styles.pieContainer}>
      <h5>Bidding Overview</h5>
	  <div className='d-flex'>
		<div className={styles.pieChart}>
	     <div className={styles.pie}></div>
		</div>
	  <div className={styles.pieIds}>
	  <p>
        <div className={`${styles.pieId} ${styles.pie1}`}></div> <span>From web</span>
      </p>
      <p>
        <div className={`${styles.pieId} ${styles.pie2}`}></div> <span>From OLX</span>
      </p>
      <p>
        <div className={`${styles.pieId} ${styles.pie3}`}></div> <span>From OLX</span>
      </p>
      <p>
        <div className={`${styles.pieId} ${styles.pie4}`}></div> <span>From OLX</span>
      </p>
      <p>
        <div className={`${styles.pieId} ${styles.pie5}`}></div> <span>From OLX</span>
      </p>
      
	  </div>
	  </div>
      
      
    </div>
  )
}

export default pieBig