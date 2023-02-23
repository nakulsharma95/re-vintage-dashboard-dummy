import React from 'react';
import { Image } from 'react-bootstrap';
import styles from './style.module.scss';

export default function NumberCard() {
  return (
    <div className={styles.numberCardMain}>
      <div className={styles.iconImg}>
        <Image src="images/gavel.png" alt="not-found" />
      </div>
      <div className={styles.title}>
        Total number of Motorcycles available on bidding portal
      </div>
      <div className={styles.number}>1616</div>
    </div>
  );
}
