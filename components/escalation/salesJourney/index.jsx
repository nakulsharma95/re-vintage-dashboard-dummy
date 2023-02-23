import React from 'react'

import styles from "./style.module.scss"

function SalesJourney() {
  
  return (
	<div>
    SalesJourney
    <div className={styles.main}>
      <ul>
        {fields("13 Sept, 2022", "Request for Evaluation")}
        {fields("13 Sept, 2022", "Evaluation Complete")}
        {fields("13 Sept, 2022", "Bidding")}
        {fields("N/A", "Procurement Details")}
        {fields("N/A", "Listed on Marketplace")}
        {fields("N/A", "Test Ride Details")}
        {fields("N/A", "Booking")}
        {fields("N/A", "Motorcycle Sold<")}
      </ul>
    </div>
  
	</div>
  )
}

export default SalesJourney

const fields = (timeline, progress) => {
  return (
    <li>
      <p className={styles.date_heading}>{timeline}</p>
      <div className={styles.progress}></div>
      <p className={styles.text}>{progress}</p>
    </li>
  );
};