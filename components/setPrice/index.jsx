import React from 'react';
import { BiRupee } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import styles from './style.module.scss';

export default function SetPrice() {
  return (
    <div className={`${styles.setPrice} py-2`}>
      <h2>Set a price</h2>
      <div className={styles.setPriceInput}>
        <span>
          <BiRupee />
        </span>
        <input type="text" defaultValue="1,22,000.00" name="" id="" />

        <Button className={styles.submitBtn}>SUBMIT</Button>
      </div>
    </div>
  );
}
