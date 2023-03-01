import React from 'react';

import styles from './style.module.scss';

function MobileDealerCard() {
  return (
    <div className={styles.dealerCard}>
      <div className={styles.dealerCardHead}>
        <h5 className={styles.dealerCardTitle}>Neel Motors</h5>
        <p className={styles.dealerCardLocation}>
          WZ - 1, Nirankari Tower, 2nd floor, Ganesh Nagar, Opposite metro
          pillar no. 535, New Delhi - 110018
        </p>
        <button type="button">VIEW DETAILS</button>
      </div>
      <div className={styles.dealerCardFooter}>
        <p>Contact Info</p>
        <hr />
        <div>
          <p>+91 98765 43210</p>
          <p>delhimotorcycles@royalenfield.com</p>
        </div>
      </div>
    </div>
  );
}

export default MobileDealerCard;
