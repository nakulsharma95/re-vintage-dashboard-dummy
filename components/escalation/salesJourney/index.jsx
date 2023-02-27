import React from 'react';
import styles from './style.module.scss';

const fields = (timeline, progress) => (
  <li>
    <p className={styles.date_heading}>{timeline}</p>
    <p className={styles.progress} />
    <p className={styles.text}>{progress}</p>
  </li>
);

function SalesJourney() {
  return (
    <div className={styles.main}>
      <h6 className={styles.salesJourneyTitle}>Sales Journey:</h6>
      <ul>
        {fields('13 Sept, 2022', 'Request for Evaluation')}
        {fields('13 Sept, 2022', 'Evaluation Complete')}
        {fields('13 Sept, 2022', 'Bidding')}
        {fields('N/A', 'Procurement Details')}
        {fields('N/A', 'Listed on Marketplace')}
        {fields('N/A', 'Test Ride Details')}
        {fields('N/A', 'Booking')}
        {fields('N/A', 'Motorcycle Sold<')}
      </ul>
    </div>
  );
}

export default SalesJourney;
