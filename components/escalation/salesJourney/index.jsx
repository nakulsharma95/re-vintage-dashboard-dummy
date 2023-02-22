import React from 'react'

import styles from "./style.module.scss"

function SalesJourney() {
  return (
	<div>
    SalesJourney
    <div className={styles.main}>
      <ul>
        <li>
          <div className={styles.progress}>
          </div>
          <p className={styles.text}>Request for Evaluation</p>
        </li>
        <li>
          <div className={styles.progress}>
          </div>
          <p className={styles.text}>Evaluation Complete</p>
        </li>
        <li>
          <div className={styles.progress}>
          </div>
          <p className={styles.text}>Bidding</p>
        </li>
        <li>
          <div className={styles.progress}>
          </div>
          <p className={styles.text}>Procurement Details</p>
        </li>
        <li>
          <div className={styles.progress}>
          </div>
          <p className={styles.text}>Listed on Marketplace</p>
        </li>
        <li>
          <div className={styles.progress}>
          </div>
          <p className={styles.text}>Test Ride Details</p>
        </li>
        <li>
          <div className={styles.progress}>
          </div>
          <p className={styles.text}>Booking</p>
        </li>

        <li>
          <div className={styles.progress}>
          </div>
          <p className={styles.text}>Motorcycle Sold</p>
        </li>
      </ul>
    </div>
	</div>
  )
}

export default SalesJourney