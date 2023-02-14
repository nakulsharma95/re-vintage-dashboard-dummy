import React from "react";
import Button from 'react-bootstrap/Button';
import styles from "./style.module.scss"
const ViewAllInnerTab = () => {
  return (
    <>
    <div className={styles.topHeader}>
      <p className={styles.topHeaderTxt}>3 Leads Available</p>
      <div className={styles.topHeaderBtnBox}>
        <p className={styles.viewText}>View:</p>
        <Button
          variant="primary"
          className={`${styles.topHeaderBtn} ${styles.activeBtn}`}
        >
          All
        </Button>
        <Button variant="primary" className={`${styles.topHeaderBtn}`}>
          Dealer
        </Button>
      </div>
    </div>
  </>
  );
};

export default ViewAllInnerTab;
